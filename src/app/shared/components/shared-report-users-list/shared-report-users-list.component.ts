import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-shared-report-users-list',
  templateUrl: './shared-report-users-list.component.html',
  styleUrls: ['./shared-report-users-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedReportUsersListComponent implements OnInit {
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
