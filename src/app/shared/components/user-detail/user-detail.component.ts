import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {Gender} from "../../model/gender";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  @Input() model: User;
  @Input() gender: Gender;

  constructor() {
  }

  ngOnInit() {
  }

  formatDate(date) {
    return DateConverter.convertDate(date);
  }
}
