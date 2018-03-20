import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {License} from '../../../shared/model/license';
import {User} from '../../../shared/model/user';
import {LicenseValidatorService} from '../../../shared/service/license-validator.service';
import {Router} from '@angular/router';
import {DialogComponent} from "../../../shared/component/dialog/dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {


  form: FormGroup;
  model: User;
  license: License;
  valid: boolean;

  constructor(private licenseValidatorService: LicenseValidatorService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private router: Router) {
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
        if (error2.status == 404) {
          this.valid = false;
          this.openDialog("ATENÇÃO", "Licença incorreda ou falsa, por favor verifique o número de série", "ok");
        }
      });
    }
  }

  onChange() {
    this.model = null
  }

  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      serial: [null, Validators.required],
    })
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });
    dialog.afterClosed().subscribe(() => {
    });
  }
}
