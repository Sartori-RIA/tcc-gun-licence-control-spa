import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../shared/model/country";
import {Exam} from "../../shared/model/exam";
import {ExamCategoryService} from "../../shared/services/exam-category.service";
import {ExamCategory} from "../../shared/model/exam-category";
import {UserRole} from "../../shared/model/user-role";
import {UserCategoryService} from "../../shared/services/user-category.service";
import {copyStyles} from "@angular/animations/browser/src/util";

@Component({
  selector: 'app-admin-register-exams',
  templateUrl: './admin-register-exams.component.html',
  styleUrls: ['./admin-register-exams.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterExamsComponent implements OnInit {

  form: FormGroup;
  private model: ExamCategory;
  exams: ExamCategory[];
  roles: UserRole[];

  constructor(private formBuilder: FormBuilder,
              private examCategoryService: ExamCategoryService,
              private userCategoryService: UserCategoryService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      role: [null, Validators.required]
    });
    this.model = new ExamCategory();
    this.examCategoryService.index().subscribe(res => this.exams = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.model.description = this.form.value.description;
      this.model.role = this.form.value.role;
      this.examCategoryService.save(this.model).subscribe(() => {
        window.location.reload();
      }, error2 => alert(JSON.stringify(error2)))
    } else {
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

}
