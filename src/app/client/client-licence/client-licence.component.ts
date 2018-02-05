import {Component, OnInit} from '@angular/core';
import {LicenseService} from "../../shared/services/license.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {License} from "../../shared/model/license";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-client-licence',
  templateUrl: './client-licence.component.html',
  styleUrls: ['./client-licence.component.scss']
})
export class ClientLicenceComponent implements OnInit {

  licenseNew: boolean;
  licensesAproved: boolean;
  licensesInProgress: boolean;
  form: FormGroup;
  licensesCategories: LicenseCategory[] = [];
  license: License;
  user: User;
  myProgressLicenses: License[] = [];
  myProgessCategories: LicenseCategory[] = [];

  constructor(private licenseService: LicenseService,
              private licenseCategoryService: LicenseCategoryService,
              private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.licenseCategoryService.index().subscribe(res => this.licensesCategories = res);
    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => this.user = res);

    this.license = new License();
  }

  newLicense() {
    this.licenseNew = true;
    this.licensesAproved = false;
    this.licensesInProgress = false;
  }

  myLicensesAproved() {
    this.licenseNew = false;
    this.licensesAproved = true;
    this.licensesInProgress = false;
  }

  myLicensesProgress() {
    this.licenseNew = false;
    this.licensesAproved = false;
    this.licensesInProgress = true;
    this.licenseService.listByOneProperty("user.cpf", this.user.cpf).subscribe(res => {
      this.myProgressLicenses = [];
      for (let license of res)
        if (license.shelfLife == null && !license.status) {
          this.myProgressLicenses.push(license)
        }
    })
  }

  initLicense(licenseCategory: LicenseCategory) {
    this.license.category = licenseCategory;
    this.license.user = this.user;
    this.licenseService.save(this.license).subscribe(res => {
      console.log(JSON.stringify(res))
    }, error2 => console.log(JSON.stringify(error2)))
  }
}
