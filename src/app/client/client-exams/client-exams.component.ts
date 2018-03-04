import {Component, OnInit} from '@angular/core';
import {ExamService} from "../../shared/services/exam.service";
import {HttpErrorService} from "../../shared/services/http-error.service";
import {LicenseService} from "../../shared/services/license.service";
import {License} from "../../shared/model/license";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  licenses: License[];
  licenseSelected: License;

  constructor(private examService: ExamService,
              private httpErrorService: HttpErrorService,
              private licenseService: LicenseService) {
  }

  ngOnInit() {
    this.loadLicenses();
  }

  loadLicenses() {
    this.licenseService.listByOneProperty("user.cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => {
        this.licenses = res;
      }, error2 => this.httpErrorService.verifyErrors(error2))
  }

  onLicenseClick(license: License) {
    this.licenseSelected = license
  }
}
