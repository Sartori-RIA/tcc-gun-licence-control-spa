import {Component, OnInit} from '@angular/core';
import {Exam} from "../../shared/model/exam";
import {ExamService} from "../../shared/services/exam.service";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  exams: Exam[];

  constructor(private examService: ExamService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.index();
  }

  index() {
    this.examService.listByOneProperty("civil.cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => this.exams = res, error2 => this.httpErrorService.verifyErrors(error2));
  }

}
