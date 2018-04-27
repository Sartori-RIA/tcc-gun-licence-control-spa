import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/model/user';
import {Cep} from '../../../shared/model/cep';
import {Gender} from '../../../shared/model/gender';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../shared/model/user-role';
import {UserService} from '../../../shared/service/user.service';
import {GenderService} from '../../../shared/service/gender.service';
import {UserCategoryService} from '../../../shared/service/user-category.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../../shared/component/dialog/dialog.component';
import {CustomValidators} from 'ng2-validation';
import {State} from "../../../shared/model/state";
import {City} from "../../../shared/model/city";
import {Country} from "../../../shared/model/country";
import {AuthService} from "../../../shared/auth/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: User = new User();
  cep: Cep = new Cep();
  genders: Gender[] = [];
  roles: UserRole[] = [];
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private authService: AuthService,
              private route: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.authService.getGenders().subscribe(res => this.genders = res);
    this.authService.getCities().subscribe(res => this.cities = res);
    this.authService.getStates().subscribe(res => this.states = res);
    this.authService.getCountries().subscribe(res => this.countries = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
    this.buildReactiveForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.converFormBuilderToModel();
      this.userService.register(this.model).subscribe(() => {
        this.route.navigate(['/login/entrar']);
        this.resetForm();
        this.openDialog("Sucesso", "Cadastrado com sucesso", "OK")
      });
    } else {
      this.openDialog("Erro", "Alguns campos precisam ser preenchidos", "OK");
      this.formDirty(this.form);
    }
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });
    dialog.afterClosed().subscribe(() => {
    });
  }

  private resetForm(): void {
    this.form.patchValue({
      name: null,
      gender: null,
      password: null,
      email: null,
      cpf: null,
      dateOfBirth: null,
      rg: null,
      rgIssuingBody: null,
      rgUF: null,
      mothersName: null,
      fathersName: null,
      nationality: null,
      naturalness: null,
      role: null
    });
  }

  private buildReactiveForm(): void {
    let pwd = new FormControl('', Validators.required);
    let certainPassword = new FormControl('', CustomValidators.equalTo(pwd));

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      password: pwd,
      confirmPassword: certainPassword,
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      rgIssuingBody: [null, Validators.required],
      rgUF: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      mothersName: [null, Validators.required],
      fathersName: [null, Validators.required],
      nationality: [null, Validators.required],
      naturalness: [null, Validators.required],
      role: [null]
    });

  }

  private converFormBuilderToModel(): void {
    this.model.name = this.form.value.name;
    this.model.gender = this.form.value.gender;
    this.model.dateOfBirth = this.form.value.dateOfBirth;
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    this.model.email = this.form.value.email;
    this.model.role = this.form.value.role;
    this.model.rg = this.form.value.rg;
    this.model.rgIssuingBody = this.form.value.rgIssuingBody;
    this.model.rgUf = this.form.value.rgUF.description;
    this.model.mothersName = this.form.value.mothersName;
    this.model.fathersName = this.form.value.fathersName;
    this.model.nationality = this.form.value.nationality.description;
    this.model.naturalness = this.form.value.naturalness.description;
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }
}
