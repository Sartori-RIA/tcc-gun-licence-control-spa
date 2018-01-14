import {Component, OnInit, Output} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {

  modelList: User[];
  @Output() modelDetail: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.index().subscribe(res => this.modelList = res)
  }

  onClickUser(model: User){
    this.modelDetail = model;
  }
}
