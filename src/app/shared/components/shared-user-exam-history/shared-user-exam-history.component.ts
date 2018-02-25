import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Exam} from "../../model/exam";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-shared-user-exam-history',
  templateUrl: './shared-user-exam-history.component.html',
  styleUrls: ['./shared-user-exam-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedUserExamHistoryComponent implements OnInit {

  @Input() model: Exam;

  constructor() {
  }

  ngOnInit() {
  }

  convertBoolean(status: boolean){
    return status ? "Deferido" : "Indeferido";
  }

  formatDate(date) {
    return DateConverter.convertDate(date);
  }
}
