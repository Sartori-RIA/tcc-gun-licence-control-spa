import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {RequirementService} from "../../shared/services/requirement.service";
import {LicenseCategory} from "../../shared/model/license-category";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {

  licensesCategories: LicenseCategory[];
  listUsers: boolean = false;
  listLicenses: boolean = false;
  listLicensesCategories: boolean = false;

  constructor(private userService: UserService,
              private licenseCategoryService: LicenseCategoryService,
              private requirementService: RequirementService) {
  }

  ngOnInit() {
    this.loadLicensesCategories();
  }

  loadLicensesCategories(){
    this.licenseCategoryService.index().subscribe(res => this.licensesCategories = res);
  }
}
