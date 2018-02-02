import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExamCategoryService} from "../../services/exam-category.service";
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {ExamCategory} from "../../model/exam-category";
import {Exam} from "../../model/exam";
import {ExamService} from "../../services/exam.service";

@Component({
  selector: 'app-shared-exam-evaluate',
  templateUrl: './shared-exam-evaluate.component.html',
  styleUrls: ['./shared-exam-evaluate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedExamEvaluateComponent implements OnInit {

  form: FormGroup;
  examForm: FormGroup;
  model: User;
  examCategories: ExamCategory[];
  exam: Exam;
  examinator: User;
  examStatusList = [
    {value: false, viewValue: 'Indeferido'},
    {value: true, viewValue: 'Deferido'},
  ];


  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private examCategoryService: ExamCategoryService,
              private examService: ExamService) {
  }

  ngOnInit() {
    this.exam = new Exam();
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required]
    });
    this.examForm = this.formBuilder.group({
      examType: [null, Validators.required],
      status: [null, Validators.required],
      resultDescription: [null, Validators.required]
    });
    this.examCategoryService.index().subscribe(res => this.examCategories = res);
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.examinator = res;
    });
  }

  searchByCPF(){
    this.userService.findByOneProperty("cpf",this.form.value.cpf).subscribe( res =>{
      this.model = res;
    });
  }

  sendExam(){
    if(this.form.valid) {
      this.mountExam();
      this.examService.save(this.exam).subscribe(res =>{
        window.location.reload();
      },error2 => console.log(JSON.stringify(error2)))
    }
  }


  mountExam() {
    this.exam.examCategory = this.examForm.value.examType;
    this.exam.resultDescription = this.examForm.value.resultDescription;
    this.exam.status = this.examForm.value.status;
    this.exam.civil = this.model;
    this.exam.examinator = this.examinator;
  }

  onResetForm() {
    this.exam = new Exam();
    this.examForm.patchValue({
      examType: "",
      status: "",
      resultDescription: ""
    })
  }

}
