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

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private cepService: CepService,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.countryService.index().subscribe(res => this.countries = res);
    this.buildReactiveForm();
  }

  addAddress() {
  }

  onCountryChose(country) {
    this.stateService.listByOneProperty('country', country).subscribe(res => this.states = res);
  }

  onStateChose(state) {
    this.cityService.listByOneProperty('state', state).subscribe(res => this.cities = res);
  }

  getCEP(): void {
    this.cepService.getCEP(this.form.value.cep).subscribe(res => this.populateAddress(res))
  }

  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      neighborhood: [null, Validators.required],
      complement: [null, Validators.required],
      addressNumber: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      street: [null, Validators.required]
    })
  }

  private populateAddress(dados): void {
    this.form.patchValue({
      cep: dados.cep,
      street: dados.logradouro,
      addressNumber: null,
      complement: dados.complemento,
      neighborhood: dados.bairro,
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

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }
}
