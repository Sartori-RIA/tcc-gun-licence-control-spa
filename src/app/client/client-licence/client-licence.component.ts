import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LicenseCategory} from '../../shared/model/license-category';
import {License} from '../../shared/model/license';
import {User} from '../../shared/model/user';
import {Exam} from '../../shared/model/exam';
import {MatDialog} from '@angular/material';
import {Address} from '../../shared/model/address';
import {LicenseService} from '../../shared/service/license.service';
import {LicenseCategoryService} from '../../shared/service/license-category.service';
import {ExamService} from '../../shared/service/exam.service';
import {UserService} from '../../shared/service/user.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-client-licence',
  templateUrl: './client-licence.component.html',
  styleUrls: ['./client-licence.component.scss']
})
export class ClientLicenceComponent implements OnInit {

  form: FormGroup;
  licensesCategories: LicenseCategory[] = [];
  license: License;
  user: User;
  myProgressLicenses: License[] = [];
  exams: Exam[];
  addressList: Address[];
  licenseAproved: License[] = [];

  constructor(private licenseService: LicenseService,
              private licenseCategoryService: LicenseCategoryService,
              private userService: UserService,
              private examService: ExamService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.license = new License();
    this.mountForm();
    this.loadLicensesCategory();
    this.loadLicenses();
    this.loadAddressList();
  }

  initLicense(licenseCategory: LicenseCategory) {
    if (this.form.valid) {
      this.mountLicense(licenseCategory);
      this.licenseService.save(this.license).subscribe(res => {
        this.myProgressLicenses.push(res);
        this.openDialog('Sucesso', 'Processo de nova Licença iniciada', 'OK');
      }, () => this.openDialog('Atençao', 'Você não atende aos requisitos desta licença', 'OK'));
    } else {
      this.openDialog('Erro', 'Alguns campos precisam ser preenchidos', 'OK');
      this.formDirty(this.form)
    }
  }

  private mountLicense(licenseCategory: LicenseCategory) {
    this.license.category = licenseCategory;
    this.license.user = this.user;
    this.license.address = this.form.value.address;
  }

  private loadLicensesCategory() {
    this.licenseCategoryService.index().subscribe(res => this.licensesCategories = res);
  }

  private loadLicenses() {
    this.userService.findByOneProperty('cpf', this.dataService.getUserCPF())
      .subscribe(res => {
        this.user = res;
        this.licenseService.listByOneProperty('user.cpf', this.user.cpf).subscribe(res => {
          this.myProgressLicenses = [];
          for (let license of res) {
            if (license.shelfLife == null && !license.status)
              this.myProgressLicenses.push(license);
            if (license.shelfLife != null && license.status)
              this.licenseAproved.push(license)
          }
        });
      });
  }

  private loadAddressList() {
    this.userService.getById(this.dataService.getUserID()).subscribe(res => this.addressList = res.addressList)
  }

  private mountForm() {
    this.form = this.formBuilder.group({
      address: [null, Validators.required]
    })
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });
    dialog.afterClosed().subscribe(result => {
    });
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }
}
