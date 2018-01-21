import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../shared/model/country";
import {State} from "../../shared/model/state";
import {City} from "../../shared/model/city";
import {CountryService} from "../../shared/services/country.service";
import {StateService} from "../../shared/services/state.service";
import {CityService} from "../../shared/services/city.service";

@Component({
  selector: 'app-admin-register-citites',
  templateUrl: './admin-register-citites.component.html',
  styleUrls: ['./admin-register-citites.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterCititesComponent implements OnInit {

  form: FormGroup;
  countries: Country[] = [];
  states: State[] = [];
  model: City;

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.model = new City();
    this.countryService.index().subscribe(res => this.countries = res);
    this.form = this.formBuilder.group({
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required]
    })
  }

  onSubmit(): void {
    if (this.form.valid)
      this.stateService.getById(this.form.value.state.id).subscribe(state => {
        this.model.state = state;
        this.model.description = this.form.value.city;
        this.cityService.save(this.model).subscribe(res => {
          window.location.reload();
        }, error2 => alert(JSON.stringify(error2)));
      });
    else
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  onChoseCountry(country): void {
    this.stateService.listByOneProperty("country.id", country.value.id).subscribe(res => this.states = res);
  }
}
