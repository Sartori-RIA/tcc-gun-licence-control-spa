import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Country} from "../../shared/model/country";
import {State} from "../../shared/model/state";
import {City} from "../../shared/model/city";
import {CountryService} from "../../shared/services/country.service";
import {StateService} from "../../shared/services/state.service";
import {CityService} from "../../shared/services/city.service";
import {SharedDialogComponent} from "../../shared/components/shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";
import {HttpErrorService} from "../../shared/services/http-error.service";

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
  statesList: State[] = [];
  citiesList: City[] = [];
  model: City;

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private stateService: StateService,
              private cityService: CityService,
              private dialog: MatDialog,
              private httpErrorService: HttpErrorService) {
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
          this.citiesList.push(res);
          this.form.patchValue({
            country: null,
            state: null,
            city: null
          });
          this.openDialog("Sucesso", "Cidade Cadastrada com Sucesso", "OK")
        }, error => this.httpErrorService.verifyErrors(error, "Erro ao Cadastrar"));
      }, error2 => this.httpErrorService.verifyErrors(error2));
    else
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  onChoseCountry(country): void {
    this.stateService.listByOneProperty("country.id", country.value.id)
      .subscribe(res => this.states = res, error2 => this.httpErrorService.verifyErrors(error2));
  }

  onCountryClick(event): void {
    for (let country of event.selected)
      this.stateService.listByOneProperty("country.id", String(country.id))
        .subscribe(res => this.statesList = res, error2 => this.httpErrorService.verifyErrors(error2));
  }

  onStateClick(event): void {
    for (let state of event.selected)
      this.cityService.listByOneProperty("state.id", String(state.id))
        .subscribe(res => this.citiesList = res, error2 => this.httpErrorService.verifyErrors(error2));
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

}
