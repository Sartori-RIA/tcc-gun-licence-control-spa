import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LicenseCategoryService} from "../../shared/services/license-category.service";
import {LicenseCategory} from "../../shared/model/license-category";
import {Requirement} from "../../shared/model/requirement";
import {ExamCategoryService} from "../../shared/services/exam-category.service";
import {ExamCategory} from "../../shared/model/exam-category";
import {RequirementService} from "../../shared/services/requirement.service";
import {DialogComponent} from "../../shared/components/dialog/dialog.component";
import {MatDialog} from "@angular/material";
import {HttpErrorService} from "../../shared/services/http-error.service";

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
              private dialog: MatDialog,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.mountFormLicense();
    this.model = new LicenseCategory();
    this.requirements = new Requirement();
    this.examCategoryService.index().subscribe(res => {
      this.examsCategories = res
    }, error2 => this.httpErrorService.verifyErrors(error2));
    this.licenseCategoryService.index()
      .subscribe(res => this.licensesCategoriesList = res,
        error2 => this.httpErrorService.verifyErrors(error2));
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
            this.openDialog("Sucesso", "Licença Salva com Sucesso", "OK")
          }, error => this.httpErrorService.verifyErrors(error, "Erro ao Salvar"))
      }, error => this.httpErrorService.verifyErrors(error, "Erro nos requisitos da licença"))
    } else {
      this.openDialog("Erro", "Os Campos Precisam ser Preenchidos", "OK");
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

  respondProcess(licence: LicenseCategory): string {
    return licence.requirement.respondingProcess == true ? "SIM" : "NÃO";
  }

  criminalRecords(licence: LicenseCategory): string {
    return licence.requirement.criminalRecors == true ? "SIM" : "NÃO";
  }

  private mountFormLicense() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      minimalAge: [null, [Validators.required, Validators.min(1)]],
      criminalRecors: [null, Validators.required],
      respondingProcess: [null, Validators.required],
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

