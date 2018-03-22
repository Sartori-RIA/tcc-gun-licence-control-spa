import {Component, OnInit} from '@angular/core';
import {LicenseCategory} from '../../shared/model/license-category';
import {License} from '../../shared/model/license';
import {UserService} from '../../shared/service/user.service';
import {LicenseCategoryService} from '../../shared/service/license-category.service';
import {RequirementService} from '../../shared/service/requirement.service';
import {LicenseService} from '../../shared/service/license.service';

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
              private licenseService: LicenseService) {
  }

  ngOnInit() {
    this.loadLicensesCategories();
    this.loadLicensesAproved();
  }

  private loadLicensesProgress() {
    this.licenseService.listByOneProperty('status', String(false))
      .subscribe(res => this.licensesProgress = res)
  }

  private loadLicensesAproved() {
    this.licenseService.listByOneProperty('status', String(true))
      .subscribe(res => this.licensesAproved = res)
  }

  private loadLicensesCategories() {
    this.licenseCategoryService.index()
      .subscribe(res => this.licensesCategories = res);
  }
}
