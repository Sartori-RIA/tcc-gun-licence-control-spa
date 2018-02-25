import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LicenseService} from "../../shared/services/license.service";
import {HttpErrorService} from "../../shared/services/http-error.service";
import {License} from "../../shared/model/license";

@Component({
  selector: 'app-delegate-reports',
  templateUrl: './delegate-reports.component.html',
  styleUrls: ['./delegate-reports.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelegateReportsComponent implements OnInit {

  licensesProgress: License[];
  licensesAproved: License[];

  constructor(private licenseService: LicenseService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.loadLicensesAproved();
    this.loadLicensesProgress();
  }

  private loadLicensesProgress() {
    this.licenseService.listByOneProperty("status", String(false))
      .subscribe(res => {
        this.licensesProgress = res
      }, error => this.httpErrorService.verifyErrors(error))
  }

  private loadLicensesAproved() {
    this.licenseService.listByOneProperty("status", String(true))
      .subscribe(res => {
        this.licensesAproved = res
      }, error => this.httpErrorService.verifyErrors(error))
  }
}
