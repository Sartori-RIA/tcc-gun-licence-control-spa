import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Country} from '../../model/country';
import {City} from '../../model/city';
import {State} from '../../model/state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../model/address';
import {User} from '../../model/user';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../../service/user.service';
import {GenderService} from '../../service/gender.service';
import {UserCategoryService} from '../../service/user-category.service';
import {CepService} from '../../service/cep.service';
import {CountryService} from '../../service/country.service';
import {StateService} from '../../service/state.service';
import {CityService} from '../../service/city.service';
import {AddressService} from '../../service/address.service';
import {DataService} from '../../auth/data.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

  form: FormGroup;
  countries: Country[];
  states: State[];
  cities: City[];
  @Output() newAddress = new EventEmitter<Address>();
  private address: Address;
  private user: User;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private cepService: CepService,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService,
              private addressService: AddressService,
              private dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.address = new Address();
    this.user = new User();
    this.countryService.index().subscribe(res => this.countries = res);
    this.buildReactiveForm();
  }

  addAddress() {
    if (this.form.valid) {
      this.mountAddress();
      this.userService.getById(this.dataService.getUserID()).subscribe(res => this.user = res);
      this.addressService.save(this.address).subscribe(res => {
        if (this.user.addressList == null)
          this.user.addressList = [];
        this.user.addressList.push(res);
        this.userService.update(this.user).subscribe(address => {
          this.newAddress.emit(res);
          this.openDialog('Sucesso', 'Endereço Adicionado com Sucesso', 'OK');
          this.resetAddess();
        });
      });
    } else {
      this.formDirty(this.form);
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

  buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      neighborhood: [null, Validators.required],
      complement: [null],
      addressNumber: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      street: [null, Validators.required],
      country: [null, Validators.required],
      cep: [null, Validators.required]
    })
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

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  resetAddess(): void {
    this.form.patchValue({
      cep: null,
      street: null,
      addressNumber: null,
      complement: null,
      neighborhood: null,
    });
  }

  formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
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
