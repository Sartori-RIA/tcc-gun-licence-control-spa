import {Component, OnInit} from '@angular/core';
import {License} from '../../shared/model/license';
import {ExamService} from '../../shared/service/exam.service';
import {LicenseService} from '../../shared/service/license.service';
import {DataService} from '../../shared/auth/data.service';
import {Exam} from "../../shared/model/exam";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  models: License[];
  modelSelected: License;

  constructor(private examService: ExamService,
              private licenseService: LicenseService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.loadLicenses();
  }

  loadLicenses() {
    this.licenseService.listByOneProperty('user.cpf', this.dataService.getUserCPF()).subscribe(res => this.models = res)
  }

  onLicenseClick(model: License) {
    this.modelSelected = model
  }

  licenseSituation(status: boolean) {
    return status ? 'Deferida' : 'Indeferida'
  }

  isValid(model: Exam): boolean {
    return model.status;
  }
}
