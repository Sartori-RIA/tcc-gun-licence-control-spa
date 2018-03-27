import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LicenseCategory} from '../../shared/model/license-category';
import {Requirement} from '../../shared/model/requirement';
import {ExamCategory} from '../../shared/model/exam-category';
import {MatDialog} from '@angular/material';
import {ExamCategoryService} from '../../shared/service/exam-category.service';
import {LicenseCategoryService} from '../../shared/service/license-category.service';
import {RequirementService} from '../../shared/service/requirement.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';

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
              private formBuilder: FormBuilder,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.mountFormLicense();
    this.model = new LicenseCategory();
    this.requirements = new Requirement();
    this.examCategoryService.index().subscribe(res => this.examsCategories = res);
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
        this.licenseCategoryService.save(this.model).subscribe(
          () => {
            this.resetForm();
            this.openDialog('Sucesso', 'Licença Salva com Sucesso', 'OK')
          })
      })
    } else {
      this.openDialog('Erro', 'Os Campos Precisam ser Preenchidos', 'OK');
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

  respondProcess(licence: LicenseCategory): string {
    return licence.requirement.respondingProcess != true ? 'SIM' : 'NÃO';
  }

  criminalRecords(licence: LicenseCategory): string {
    return licence.requirement.criminalRecors != true ? 'SIM' : 'NÃO';
  }

  private mountFormLicense() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      minimalAge: [null, [Validators.required, Validators.min(1)]],
      criminalRecors: [null],
      respondingProcess: [null],
      exams: this.formBuilder.array([
        new FormControl()
      ])
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

  private resetForm() {
    this.form.patchValue({
      description: null,
      minimalAge: null,
      criminalRecors: null,
      respondingProcess: null,
      exams: null
    });
  }

  private mountModel() {
    this.model.description = this.form.value.description;
    this.requirements.exams = this.form.value.exams;
    this.requirements.minimalAge = this.form.value.minimalAge;
    this.requirements.criminalRecors = this.form.value.criminalRecors;
    this.requirements.respondingProcess = this.form.value.respondingProcess;
  }
}

