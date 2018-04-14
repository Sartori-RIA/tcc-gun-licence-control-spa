import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from '../../model/license';
import {DateConverter} from '../../util/date-converter';
import {RoutesClientUtil} from "../../util/routes-client.util";
import {PrintPdfService} from "../../service/print-pdf.service";

@Component({
  selector: 'app-valid-license',
  templateUrl: './valid-license.component.html',
  styleUrls: ['./valid-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ValidLicenseComponent implements OnInit {

  @Input() model: License;

  constructor(private printLicenseService: PrintPdfService) {
  }

  ngOnInit() {
  }

  licenseExpiration(expiration: Date) {
    return expiration != null ? DateConverter.convertDate(expiration) : 'Licença Pendente';
  }

  licenseSituation(status: boolean) {
    return status ? 'Deferida' : 'Indeferida'
  }

  isValid(): boolean {
    return this.model.status;
  }

  licenseSerialUrl(): string {
    return `${RoutesClientUtil.VALIDATOR}find/serial/${this.model.serial}`
  }
  printLicense(){
    this.printLicenseService.printPDF(this.model);
  }
}
