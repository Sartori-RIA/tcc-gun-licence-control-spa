import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {State} from "../../shared/model/state";
import {StateService} from "../../shared/services/state.service";
import {CountryService} from "../../shared/services/country.service";
import {Country} from "../../shared/model/country";

@Component({
  selector: 'app-admin-register-states',
  templateUrl: './admin-register-states.component.html',
  styleUrls: ['./admin-register-states.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterStatesComponent implements OnInit {

  form: FormGroup;
  model: State;
  countries: Country[];


  constructor(private formBuilder: FormBuilder,
              private stateService: StateService,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.model = new State();
    this.countryService.index().subscribe(res => this.countries = res);
    this.form = this.formBuilder.group({
      country: [null, Validators.required],
      name: [null, Validators.required],
      abbrev: [null, Validators.required]
    })
  }

  onSubmit(): void {
    if (this.form.valid)
      this.countryService.show(this.form.value.country.id).subscribe(country => {
        this.model.country = country;
        this.model.description = this.form.value.name;
        this.model.abbrev = this.form.value.abbrev;
        this.stateService.create(this.model).subscribe(res => {
          window.location.reload();
        }, error2 => alert(JSON.stringify(error2)));
      });
    else
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

}
