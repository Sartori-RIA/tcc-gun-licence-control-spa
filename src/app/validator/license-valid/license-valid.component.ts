import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-license-valid',
  templateUrl: './license-valid.component.html',
  styleUrls: ['./license-valid.component.scss']
})
export class LicenseValidComponent implements OnInit {

  @Input() model: User;

  constructor() {
  }

  ngOnInit() {
  }

}
