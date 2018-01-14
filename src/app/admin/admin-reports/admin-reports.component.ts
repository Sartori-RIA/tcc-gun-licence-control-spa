import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  private _listUsers: boolean;

  get listUsers(): boolean {
    return this._listUsers;
  }

  set listUsers(value: boolean) {
    this._listUsers = value;
  }

  private _listLicenses: boolean;

  get listLicenses(): boolean {
    return this._listLicenses;
  }

  set listLicenses(value: boolean) {
    this._listLicenses = value;
  }

  ngOnInit() {

  }

  onChange(event) {
    if (event == 'listLicenses') {
      this.listLicenses = true;
      this.listUsers = false;
    }
    if (event == 'listUsers') {
      this.listUsers = true;
      this.listLicenses = false;
    }
  }
}
