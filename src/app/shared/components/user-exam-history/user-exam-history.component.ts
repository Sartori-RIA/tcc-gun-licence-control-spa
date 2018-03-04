import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Exam} from "../../model/exam";
import {DateConverter} from "../../util/date-converter";

@Component({
  selector: 'app-user-exam-history',
  templateUrl: './user-exam-history.component.html',
  styleUrls: ['./user-exam-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserExamHistoryComponent implements OnInit {

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
