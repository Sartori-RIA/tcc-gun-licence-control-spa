import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-report-users-list',
  templateUrl: './report-users-list.component.html',
  styleUrls: ['./report-users-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportUsersListComponent implements OnInit {
  modelList: User[];
  @Output() modelDetail: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.index().subscribe(res => this.modelList = res)
  }

  onClickUser(model: User) {
    this.modelDetail = model;
  }
}
