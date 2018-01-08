import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  @Input() model: User;

  constructor() { }

  ngOnInit() {
  }

}
