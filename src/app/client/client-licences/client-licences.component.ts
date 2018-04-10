import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/service/license-category.service";
import {Address} from "../../shared/model/address";
import {Exam} from "../../shared/model/exam";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/service/user.service";
import {LicenseService} from "../../shared/service/license.service";
import {MatDialog} from "@angular/material";
import {DataService} from "../../shared/auth/data.service";
import {License} from "../../shared/model/license";
import {ExamService} from "../../shared/service/exam.service";
import {LicenseCategory} from "../../shared/model/license-category";

@Component({
  selector: 'app-client-licences',
  templateUrl: './client-licences.component.html',
  styleUrls: ['./client-licences.component.scss']
})
export class ClientLicencesComponent implements OnInit {

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

}
