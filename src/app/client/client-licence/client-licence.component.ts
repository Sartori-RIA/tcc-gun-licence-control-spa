import {Component, OnInit} from '@angular/core';
import {LicenseService} from "../../shared/services/license.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {License} from "../../shared/model/license";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {DateConverter} from "../../shared/util/date-converter";
import {Exam} from "../../shared/model/exam";
import {ExamService} from "../../shared/services/exam.service";
import {SharedDialogComponent} from "../../shared/components/shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";
import {HttpErrorService} from "../../shared/services/http-error.service";
import {Address} from "../../shared/model/address";

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
              private httpErrorService: HttpErrorService) {
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
        this.openDialog("Sucesso", "Processo de nova Licença iniciada", "OK");
      }, error2 => this.httpErrorService.verifyErrors(error2, "Você não possui os requisitos para a licença"));
    } else {
      this.openDialog("Erro", "Alguns campos precisam ser preenchidos", "OK");
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
    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => {
        this.user = res;
        this.licenseService.listByOneProperty("user.cpf", this.user.cpf).subscribe(res => {
          this.myProgressLicenses = [];
          for (let license of res) {
            if (license.shelfLife == null && !license.status)
              this.myProgressLicenses.push(license)
            if (license.shelfLife != null && license.status)
              this.licenseAproved.push(license)
          }
        }, error2 => this.httpErrorService.verifyErrors(error2));
      }, error2 => this.httpErrorService.verifyErrors(error2));
  }

  private loadAddressList() {
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.addressList = res.addressList;
    }, error2 => this.httpErrorService.verifyErrors(error2))
  }

  private mountForm() {
    this.form = this.formBuilder.group({
      address: [null, Validators.required]
    })
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
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
