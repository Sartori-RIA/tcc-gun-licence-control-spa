import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExamCategoryService} from "../../shared/services/exam-category.service";
import {ExamCategory} from "../../shared/model/exam-category";
import {Exam} from "../../shared/model/exam";
import {ExamService} from "../../shared/services/exam.service";

@Component({
  selector: 'app-psychologist-evaluate',
  templateUrl: './psychologist-evaluate.component.html',
  styleUrls: ['./psychologist-evaluate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistEvaluateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
