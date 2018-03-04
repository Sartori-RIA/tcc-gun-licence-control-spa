import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from "../../model/license";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-progress-license',
  templateUrl: './progress-license.component.html',
  styleUrls: ['./progress-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressLicenseComponent implements OnInit {

  @Input()license: License;

  constructor() { }

  ngOnInit() {
  }

  licenseExpiration(expiration: Date) {
    return expiration != null ? DateConverter.convertDate(expiration) : "Licença Pendente";
  }

  licenseSituation(status: boolean) {
    return status ? "Deferida" : "Indeferida"
  }
}
