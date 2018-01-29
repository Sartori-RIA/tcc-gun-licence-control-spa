import {Component, OnInit} from '@angular/core';
import {Country} from "../../model/country";
import {City} from "../../model/city";
import {State} from "../../model/state";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../services/country.service";
import {StateService} from "../../services/state.service";
import {CepService} from "../../services/cep.service";
import {GenderService} from "../../services/gender.service";
import {CityService} from "../../services/city.service";
import {UserCategoryService} from "../../services/user-category.service";
import {UserService} from "../../services/user.service";
import {Address} from "../../model/address";
import {User} from "../../model/user";
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'app-shared-form-address',
  templateUrl: './shared-form-address.component.html',
  styleUrls: ['./shared-form-address.component.scss']
})
export class SharedFormAddressComponent implements OnInit {

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
              private cepService: CepService,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService,
              private addressService: AddressService) {
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
      this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => this.user = res);
      this.addressService.save(this.address).subscribe(res => {
        if (this.user.addressList == null)
          this.user.addressList = [];
        this.user.addressList.push(res);
        console.log(JSON.stringify(this.user));
        this.userService.update(this.user).subscribe(() => {
          window.location.reload();
        }, error2 => console.log("deu ruim", JSON.stringify(error2)))
      });
    } else {
      this.formDirty(this.form);
    }
  }

  onCountryChose(country) {
    this.stateService.listByOneProperty('country.id', country.value.id).subscribe(res => this.states = res);
  }

  onStateChose(state) {
    this.cityService.listByOneProperty('state.id', state.value.id).subscribe(res => this.cities = res);
  }

  onCityChose(){
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
