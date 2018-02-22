import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExamCategoryService} from "../../shared/services/exam-category.service";
import {ExamCategory} from "../../shared/model/exam-category";
import {UserRole} from "../../shared/model/user-role";
import {UserCategoryService} from "../../shared/services/user-category.service";
import {SharedDialogComponent} from "../../shared/components/shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";
import {HttpErrorService} from "../../shared/services/http-error.service";

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
              private dialog: MatDialog,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      role: [null, Validators.required]
    });
    this.model = new ExamCategory();
    this.examCategoryService.index().subscribe(res => this.exams = res, error2 => this.httpErrorService.verifyErrors(error2));
    this.userCategoryService.index().subscribe(res => this.roles = res, error2 => this.httpErrorService.verifyErrors(error2));
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.model.description = this.form.value.description;
      this.model.role = this.form.value.role;
      this.examCategoryService.save(this.model).subscribe(() => {
        this.form.patchValue({
          description: null,
          role: null
        });
        this.openDialog("Sucesso", "Exame Salvo com Sucesso", "OK")
      }, error2 => this.httpErrorService.verifyErrors(error2, "Erro ao Salvar"));
    } else {
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
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
