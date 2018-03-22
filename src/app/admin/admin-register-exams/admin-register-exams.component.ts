import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExamCategory} from '../../shared/model/exam-category';
import {UserRole} from '../../shared/model/user-role';
import {MatDialog} from '@angular/material';
import {ExamCategoryService} from '../../shared/service/exam-category.service';
import {UserCategoryService} from '../../shared/service/user-category.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-admin-register-exams',
  templateUrl: './admin-register-exams.component.html',
  styleUrls: ['./admin-register-exams.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterExamsComponent implements OnInit {

  form: FormGroup;
  exams: ExamCategory[];
  roles: UserRole[];
  private model: ExamCategory;

  constructor(private formBuilder: FormBuilder,
              private examCategoryService: ExamCategoryService,
              private userCategoryService: UserCategoryService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.mountFormExam();
    this.model = new ExamCategory();
    this.examCategoryService.index().subscribe(res => this.exams = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.model.description = this.form.value.description;
      this.model.role = this.form.value.role;
      this.examCategoryService.save(this.model).subscribe(() => {
        this.resetFormExam();
        this.openDialog('Sucesso', 'Exame Salvo com Sucesso', 'OK')
      });
    } else {
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

  private resetFormExam() {
    this.form.patchValue({
      description: null,
      role: null
    });
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
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      role: [null, Validators.required]
    });
  }
}
