import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from '../../model/license';
import {DateConverter} from '../../util/date-converter';
import {RoutesClientUtil} from "../../util/routes-client.util";

@Component({
  selector: 'app-valid-license',
  templateUrl: './valid-license.component.html',
  styleUrls: ['./valid-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ValidLicenseComponent implements OnInit {

  @Input() license: License;

  constructor() {
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
    return this.license.status;
  }

  licenseSerialUrl(): string {
    return `${RoutesClientUtil.VALIDATOR}find/serial/${this.license.serial}`
  }

  printLicense() {
    let licenceHeader =
      `<head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>
      </head>`;

    let licenseStyle =
      `<style>
           .max-license-width{
            width: 500px;
           }
       </style>`;

    let licenceBody = `<body>
      <div class="row">
          <div class="col s12 m7">
             <div class="card max-license-width">
                 <div class="card-title center-align"><strong>Portador: </strong>${this.formatCamelCase(this.license.user.name)}</div>
                     <div class="card-content">
                         <div><p><strong>Numero de serie: </strong>${this.license.serial}</p></div>
                         <div><p><strong>Categoria: </strong>${this.formatCamelCase(this.license.category.description)}</p> </div>
                         <div><p><strong>Situação: </strong>${this.formatCamelCase(this.licenseSituation(this.license.status))}</p></div>
                         <div><p><strong>Validade até: </strong>${this.licenseExpiration(this.license.shelfLife)}</p></div>
                         <div><p><strong>CPF: </strong>${this.formatCPF(this.license.user.cpf)}</p></div>
                         <div><p><strong>RG: </strong>${this.license.user.rg}</p></div>
                         <div><p><strong>Rua: </strong>${this.formatCamelCase(this.license.address.street}) - ${this.license.address.addressNumber}</p></div>
                         <div><p><strong>Cidade: </strong>${this.formatCamelCase(this.license.address.city.description)}</p></div>
                         <div><p><strong>Estado: </strong>${this.formatCamelCase(this.license.address.city.state.description)}</p></div>                       
                         <div><p><strong>Pais: </strong>${this.formatCamelCase(this.license.address.city.state.country.description)}</p>
                         <canvas id="qr"></canvas> 
                         <div hidden id="serialUrl">${this.licenseSerialUrl()}</div>
                     </div>
                 </div>
             </div>
         </div>
         <script type="text/javascript">
            (function() {
        var qr = new QRious({
            element: document.getElementById('qr'),
            value: document.getElementById('serialUrl'),
            level: 'L',
        });
      })();
        </script>
      </body>`;

    window.document.write(licenceHeader + licenseStyle + licenceBody);
    window.print();
  }

  private formatCamelCase(value: string): string {
    let values = value.split(' ');
    let result = '';
    for (let v of values)
      result += this.capitalize(v) + ' ';
    return result;
  }

  private capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() +
      value.substr(1).toLowerCase();
  }

  private formatCPF(value: string): string {
    return value.substring(0, 3).concat('.')
      .concat(value.substring(3, 6))
      .concat('.')
      .concat(value.substring(6, 9))
      .concat('-')
      .concat(value.substring(9, 11))
  }
}
