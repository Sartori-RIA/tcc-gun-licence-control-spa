import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from "../../model/license";

@Component({
  selector: 'app-shared-progress-license',
  templateUrl: './shared-progress-license.component.html',
  styleUrls: ['./shared-progress-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedProgressLicenseComponent implements OnInit {

  @Input()license: License;

  constructor() { }

  ngOnInit() {
  }

}
