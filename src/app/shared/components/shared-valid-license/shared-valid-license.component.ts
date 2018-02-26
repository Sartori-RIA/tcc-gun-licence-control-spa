import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from "../../model/license";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-shared-valid-license',
  templateUrl: './shared-valid-license.component.html',
  styleUrls: ['./shared-valid-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedValidLicenseComponent implements OnInit {

  @Input() license: License;

  constructor() {
  }

  ngOnInit() {
  }

  licenseExpiration(expiration: Date) {
    return expiration != null ? DateConverter.convertDate(expiration) : "Licença Pendente";
  }

  licenseSituation(status: boolean) {
    return status ? "Deferida" : "Indeferida"
  }

  isValid(): boolean {
    return this.license.status;
  }
}
