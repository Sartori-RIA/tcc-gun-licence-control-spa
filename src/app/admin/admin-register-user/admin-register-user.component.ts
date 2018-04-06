import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Gender} from '../../shared/model/gender';
import {User} from '../../shared/model/user';
import {Cep} from '../../shared/model/cep';
import {UserRole} from '../../shared/model/user-role';
import {Router} from '@angular/router';
import {Address} from '../../shared/model/address';
import {Country} from '../../shared/model/country';
import {City} from '../../shared/model/city';
import {MatDialog} from '@angular/material';
import {State} from '../../shared/model/state';
import {UserService} from '../../shared/service/user.service';
import {GenderService} from '../../shared/service/gender.service';
import {UserCategoryService} from '../../shared/service/user-category.service';
import {CepService} from '../../shared/service/cep.service';
import {CountryService} from '../../shared/service/country.service';
import {StateService} from '../../shared/service/state.service';
import {CityService} from '../../shared/service/city.service';
import {AddressService} from '../../shared/service/address.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'app-admin-register-user',
  templateUrl: './admin-register-user.component.html',
  styleUrls: ['./admin-register-user.component.scss']
})
export class AdminRegisterUserComponent implements OnInit {

  @Input() isClient: boolean = false;
  model: User = new User();
  cep: Cep = new Cep();
  genders: Gender[] = [];
  roles: UserRole[] = [];
  form: FormGroup;
  countries: Country[];
  states: State[];
  cities: City[];
  private address: Address;
  private user: User;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private route: Router,
              private cepService: CepService,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService,
              private addressService: AddressService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.countryService.index().subscribe(res => this.countries = res);
    this.genderService.index().subscribe(res => this.genders = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
    this.address = new Address();
    this.user = new User();
    this.buildReactiveForm();
  }


  onSubmit(): void {
    if (this.form.valid) {
      this.converFormBuilderToModel();
      this.mountAddress();
      this.model.addressList = [];
      this.model.addressList.push(this.address);
      this.userService.save(this.model).subscribe(res => {
        this.resetForm();
        this.openDialog('Sucesso', 'Cadastrado com sucesso', 'OK')
      });
    } else {
      this.openDialog('Erro', 'Alguns campos precisam ser preenchidos', 'OK');
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

  onCountryChose(country) {
    this.stateService.listByOneProperty('country.id',
      country.value.id).subscribe(res => this.states = res);
  }

  onStateChose(state) {
    this.cityService.listByOneProperty('state.id',
      state.value.id).subscribe(res => this.cities = res);
  }

  onCityChose() {
    this.resetAddess();
  }

  getCEP(): void {
    this.cepService.getCEP(this.form.value.cep).subscribe(res => this.populateAddress(res))
  }

  populateAddress(dados): void {
    this.form.patchValue({
      cep: dados.cep,
      street: dados.logradouro,
      addressNumber: null,
      complement: dados.complemento,
      neighborhood: dados.bairro,
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

  private resetAddess(): void {
    this.form.patchValue({
      cep: null,
      street: null,
      addressNumber: null,
      complement: null,
      neighborhood: null,
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
      role: null,
      neighborhood: null,
      complement: null,
      addressNumber: null,
      state: null,
      city: null,
      street: null,
      country: null,
      cep: null
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
      role: [null],
      neighborhood: [null, Validators.required],
      complement: [null],
      addressNumber: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      street: [null, Validators.required],
      country: [null, Validators.required],
      cep: [null, Validators.required]
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
    this.model.rgUf = this.form.value.rgUF;
    this.model.mothersName = this.form.value.mothersName;
    this.model.fathersName = this.form.value.fathersName;
    this.model.nationality = this.form.value.nationality;
    this.model.naturalness = this.form.value.naturalness;
  }

  private mountAddress() {
    this.address.city = this.form.value.city;
    this.address.complement = this.form.value.complement;
    this.address.addressNumber = this.form.value.addressNumber;
    this.address.street = this.form.value.street;
    this.address.neighborhood = this.form.value.neighborhood;
    this.address.cep = this.form.value.cep;
  }
}
