import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {Requirement} from "../../shared/model/requirement";
import {ExamCategoryService} from "../../shared/services/exam-category.service";
import {ExamCategory} from "../../shared/model/exam-category";
import {RequirementService} from "../../shared/services/requirement.service";

@Component({
  selector: 'app-admin-register-licenses',
  templateUrl: './admin-register-licenses.component.html',
  styleUrls: ['./admin-register-licenses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterLicensesComponent implements OnInit {
  model: LicenseCategory;
  form: FormGroup;
  requirements: Requirement;
  examsCategories: ExamCategory[];
  licensesCategoriesList: LicenseCategory[];

  constructor(private licenseCategoryService: LicenseCategoryService,
              private examCategoryService: ExamCategoryService,
              private requirementService: RequirementService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      minimalAge: [null, [Validators.required, Validators.min(1)]],
      exams: this.formBuilder.array([
        new FormControl()
      ])
    });
    this.model = new LicenseCategory();
    this.requirements = new Requirement();
    this.examCategoryService.index().subscribe(res => {
      this.examsCategories = res
    });
    this.licenseCategoryService.index().subscribe(res => this.licensesCategoriesList = res);
  }

  onAddExam() {
    const control = <FormArray>this.form.controls['exams'];
    control.push(new FormControl())
  }

  onSubmit() {
    if (this.form.valid) {
      this.mountModel();
      this.requirementService.save(this.requirements).subscribe(res => {
        this.model.requirement = res;
        console.log(JSON.stringify(this.model));
        this.licenseCategoryService.save(this.model).subscribe(
          () => window.location.reload(),
          error2 => console.log("ERRO NA LICENÇA"+ JSON.stringify(error2)))
      }, error => {
        console.log("ERRO NOS REQUISITOS"+ JSON.stringify(error))
      })


    } else Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  private mountModel() {
    this.model.description = this.form.value.description;
    this.requirements.exams = this.form.value.exams;
    this.requirements.minimalAge = this.form.value.minimalAge;
  }
}
