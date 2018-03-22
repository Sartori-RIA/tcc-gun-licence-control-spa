import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {ExamCategory} from '../../model/exam-category';
import {Exam} from '../../model/exam';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {DateConverter} from '../../util/date-converter';
import {License} from '../../model/license';
import {UserService} from '../../service/user.service';
import {ExamCategoryService} from '../../service/exam-category.service';
import {LicenseService} from '../../service/license.service';
import {ExamService} from '../../service/exam.service';
import {AuthService} from '../../auth/auth.service';
import {DataService} from '../../auth/data.service';

@Component({
  selector: 'app-exam-evaluate',
  templateUrl: './exam-evaluate.component.html',
  styleUrls: ['./exam-evaluate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExamEvaluateComponent implements OnInit {

  form: FormGroup;
  examForm: FormGroup;
  model: User;
  license: License;
  examCategories: ExamCategory[] = [];
  exam: Exam;
  examHistory: Exam[] = [];
  examinator: User;
  examStatusList = [
    {value: false, viewValue: 'Indeferido'},
    {value: true, viewValue: 'Deferido'},
  ];


  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private examCategoryService: ExamCategoryService,
              private licenseService: LicenseService,
              private examService: ExamService,
              private dialog: MatDialog,
              private authService: AuthService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.exam = new Exam();
    this.license = new License();
    this.mountFormSearchUser();
    this.mountFormExam();
    this.examCategoryService.index().subscribe(res => {
      for (let item of res)
        if (item.role.description == this.dataService.getUserRole())
          this.examCategories.push(item)
    });
    this.userService.getById(this.dataService.getUserID()).subscribe(res => this.examinator = res);
  }

  formatDate(date) {
    return DateConverter.convertDate(date);
  }

  searchBySerial() {
    if (this.form.valid) {
      this.licenseService.findByTwoProperty(
        'user.cpf', this.form.value.cpf,
        'serial', this.form.value.serial).subscribe(res => {
        this.model = res.user;
        this.license = res;
        this.examHistory = res.examList;
      })
    } else {
      this.openDialog('Erro', 'Alguns campos precisam ser preenchidos', 'OK');
      this.formDirty(this.form);
    }
  }

  sendExam() {
    if (this.examForm.valid) {
      this.mountExam();
      this.examService.save(this.exam).subscribe(res => {
        if (this.license.examList == null)
          this.license.examList = [];
        this.license.examList.push(res);
        this.licenseService.update(this.license).subscribe(res => {
          this.examHistory = res.examList;
          this.openDialog('Sucesso', 'Exame Salvo com Sucesso', 'OK');
        });
        this.onResetForm();
      });
    } else {
      this.openDialog('Erro', 'Alguns campos precisam ser preenchidos', 'OK');
      this.formDirty(this.form);
    }
  }

  onResetForm() {
    this.exam = new Exam();
    this.examForm.patchValue({
      examType: '',
      status: '',
      resultDescription: ''
    })
  }

  convertBoolean(status: boolean) {
    return status ? 'Deferido' : 'Indeferido';
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  private mountFormExam() {
    this.examForm = this.formBuilder.group({
      examType: [null, Validators.required],
      status: [null, Validators.required],
      resultDescription: [null, Validators.required]
    });
  }

  private mountFormSearchUser() {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      serial: [null, Validators.required]
    });
  }

  private mountExam() {
    this.exam.examCategory = this.examForm.value.examType;
    this.exam.resultDescription = this.examForm.value.resultDescription;
    this.exam.status = this.examForm.value.status;
    this.exam.civil = this.model;
    this.exam.examinator = this.examinator;
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }
}
