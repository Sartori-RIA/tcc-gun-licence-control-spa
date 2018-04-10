import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {License} from '../../model/license';
import {DateConverter} from '../../util/date-converter';
import {MatStepper} from "@angular/material";
import {Exam} from "../../model/exam";

@Component({
  selector: 'app-progress-license',
  templateUrl: './progress-license.component.html',
  styleUrls: ['./progress-license.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressLicenseComponent implements OnInit {

  @Input() license: License;

  constructor() {
  }

  ngOnInit() {
  }

  licenseExpiration(expiration: Date) {
    return expiration != null ? DateConverter.convertDate(expiration) : 'Licença Pendente';
  }

  licenseSituation(status: boolean): string {
    return status ? 'Deferida' : 'Indeferida'
  }

  steppInit(stepper: MatStepper): void {
      stepper.next();
  }

  steppApproved(stepper: MatStepper): void {
    if (this.verifyExams() && this.license.shelfLife != null)
      stepper.next();
  }

  private verifyExams(): boolean {
    let exams: Exam[] = [];
    if (this.license.examList != null) {
      this.license.category.requirement.exams.forEach(examCategory => {
        this.license.examList.forEach(exam => {
          if (exam.examCategory.id == examCategory.id && exam.status)
            exams.push(exam);
        });
      });
    }
    return exams.length == this.license.category.requirement.exams.length;
  }
}
