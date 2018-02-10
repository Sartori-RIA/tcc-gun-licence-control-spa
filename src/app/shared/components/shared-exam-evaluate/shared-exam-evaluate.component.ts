import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExamCategoryService} from "../../services/exam-category.service";
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {ExamCategory} from "../../model/exam-category";
import {Exam} from "../../model/exam";
import {ExamService} from "../../services/exam.service";
import {SharedDialogComponent} from "../shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";
import {DateConverter} from "../../util/date-converter";

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
  examCategories: ExamCategory[] = [];
  exam: Exam;
  examinator: User;
  examStatusList = [
    {value: false, viewValue: 'Indeferido'},
    {value: true, viewValue: 'Deferido'},
  ];


  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private examCategoryService: ExamCategoryService,
              private examService: ExamService,
              private dialog: MatDialog) {
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
    this.examCategoryService.index().subscribe(res => {
      for (let item of res)
        if (item.role.description == sessionStorage.getItem("currentUserRole"))
          this.examCategories.push(item)
    });
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.examinator = res;
    });
  }

  formatDate(date){
    return DateConverter.convertDate(date);
  }

  searchByCPF() {
    this.userService.findByOneProperty("cpf", this.form.value.cpf).subscribe(res => {
      this.model = res;
    });
  }

  sendExam() {
    if (this.examForm.valid) {
      this.mountExam();
      this.examService.save(this.exam).subscribe(res => {
       this.openDialog("Sucesso","Exame Salvo com Sucesso","OK");
       this.onResetForm();
      }, () => this.openDialog("Erro","Erro ao Salvar o Exame","OK"));
    }else{
      this.openDialog("Erro", "Alguns campos precisam ser preenchidos", "OK");
      this.formDirty(this.form);
    }
  }


  mountExam() {
    this.exam.examCategory = this.examForm.value.examType;
    this.exam.resultDescription = this.examForm.value.resultDescription;
    this.exam.status = this.examForm.value.status;
    this.exam.civil = this.model;
    this.exam.examinator = this.examinator;
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }

  onResetForm() {
    this.exam = new Exam();
    this.examForm.patchValue({
      examType: "",
      status: "",
      resultDescription: ""
    })
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
}
