import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {RequirementService} from "../../shared/services/requirement.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {HttpErrorService} from "../../shared/services/http-error.service";
import {LicenseService} from "../../shared/services/license.service";
import {License} from "../../shared/model/license";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {

  licensesCategories: LicenseCategory[];
  licensesAproved: License[];
  licensesProgress: License[];
  listUsers: boolean = false;
  listLicenses: boolean = false;
  listLicensesCategories: boolean = false;

  constructor(private userService: UserService,
              private licenseCategoryService: LicenseCategoryService,
              private requirementService: RequirementService,
              private httpErrorService: HttpErrorService,
              private licenseService: LicenseService) {
  }

  ngOnInit() {
    this.loadLicensesCategories();
    this.loadLicensesAproved();
  }

  private loadLicensesProgress(){
    this.licenseService.listByOneProperty("status", String(false))
      .subscribe(res => {
        this.licensesProgress = res
      }, error => this.httpErrorService.verifyErrors(error))
  }

  private loadLicensesAproved() {
    this.licenseService.listByOneProperty("status", String(true))
      .subscribe(res => {
        this.licensesAproved = res
      }, error => this.httpErrorService.verifyErrors(error))
  }

  private loadLicensesCategories() {
    this.licenseCategoryService.index()
      .subscribe(res => {
        this.licensesCategories = res
      }, error => this.httpErrorService.verifyErrors(error));
  }
}
