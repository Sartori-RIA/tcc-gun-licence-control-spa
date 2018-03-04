import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {HttpErrorService} from "../../services/http-error.service";

@Component({
  selector: 'app-report-users-list',
  templateUrl: './report-users-list.component.html',
  styleUrls: ['./report-users-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportUsersListComponent implements OnInit {
  modelList: User[];
  @Output() modelDetail: User;

  constructor(private userService: UserService,
              private httpErroService: HttpErrorService) {
  }

  ngOnInit() {
    this.userService.index().subscribe(res => this.modelList = res, error2 => this.httpErroService.verifyErrors(error2))
  }

  onClickUser(model: User) {
    this.modelDetail = model;
  }
}
