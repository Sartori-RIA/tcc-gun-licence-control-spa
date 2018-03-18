import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from '../../shared/model/license';
import {LicenseService} from '../../shared/service/license.service';
import {HttpErrorService} from '../../shared/service/http-error.service';

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
    this.licenseService.listByOneProperty('status', String(false))
      .subscribe(res => {
        this.licensesProgress = res
      }, error => this.httpErrorService.verifyErrors(error))
  }

  private loadLicensesAproved() {
    this.licenseService.listByOneProperty('status', String(true))
      .subscribe(res => {
        this.licensesAproved = res
      }, error => this.httpErrorService.verifyErrors(error))
  }
}
