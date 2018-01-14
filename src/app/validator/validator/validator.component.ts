import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LicenseValidatorService} from "../../shared/services/license-validator.service";
import {User} from "../../shared/model/user";
import {License} from "../../shared/model/license";
import {Router} from "@angular/router";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  form: FormGroup;
  model: User;
  license: License;

  constructor(private licenseValidatorService: LicenseValidatorService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  private _valid: boolean;

  get valid(): boolean {
    return this._valid;
  }

  set valid(value: boolean) {
    this._valid = value;
  }

  ngOnInit() {
    this.model = new User();
    this.license = new License();
    this.buildReactiveForm();
  }

  onSubmit() {
    if (this.form.valid) {
      this.license.serial = this.form.value.serial;
      this.licenseValidatorService.validateLicense(this.license).subscribe(res => {
        this.model = res;
        this.valid = true;
      }, error2 => {
        this.valid = false;
//TODO  redirecionar para uma rota com a mensagem de erro OU conseguir carregar abaixo a mensagem de erro
      });
    }
  }

  buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      serial: [null, Validators.required],
    })
  }
}
