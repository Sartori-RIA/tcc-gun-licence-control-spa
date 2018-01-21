import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-shared-user-update',
  templateUrl: './shared-user-update.component.html',
  styleUrls: ['./shared-user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedUserUpdateComponent implements OnInit {

  @Input() model: User;

  constructor() { }

  ngOnInit() {
  }

}
