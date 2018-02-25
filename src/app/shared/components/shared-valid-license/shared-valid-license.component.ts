import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from "../../model/license";

@Component({
  selector: 'app-shared-valid-license',
  templateUrl: './shared-valid-license.component.html',
  styleUrls: ['./shared-valid-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedValidLicenseComponent implements OnInit {

  @Input()license: License;

  constructor() { }

  ngOnInit() {
  }

}
