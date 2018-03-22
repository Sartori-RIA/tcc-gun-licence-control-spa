import {Component, OnInit} from '@angular/core';
import {License} from '../../shared/model/license';
import {ExamService} from '../../shared/service/exam.service';
import {LicenseService} from '../../shared/service/license.service';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  licenses: License[];
  licenseSelected: License;

  constructor(private examService: ExamService,
              private licenseService: LicenseService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.loadLicenses();
  }

  loadLicenses() {
    this.licenseService.listByOneProperty('user.cpf', this.dataService.getUserCPF()).subscribe(res => this.licenses = res)
  }

  onLicenseClick(license: License) {
    this.licenseSelected = license
  }
}
