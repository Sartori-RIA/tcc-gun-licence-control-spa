import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {Gender} from "../../model/gender";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-shared-user-detail',
  templateUrl: './shared-user-detail.component.html',
  styleUrls: ['./shared-user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedUserDetailComponent implements OnInit {

  @Input() model: User;
  @Input() gender: Gender;

  constructor() {
  }

  ngOnInit() {
  }

  formatDate(date){
    return DateConverter.convertDate(date);
  }
}
