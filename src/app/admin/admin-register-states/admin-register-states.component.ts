import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {State} from '../../shared/model/state';
import {Country} from '../../shared/model/country';
import {MatDialog} from '@angular/material';
import {StateService} from '../../shared/service/state.service';
import {CountryService} from '../../shared/service/country.service';
import {DialogComponent} from '../../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-admin-register-states',
  templateUrl: './admin-register-states.component.html',
  styleUrls: ['./admin-register-states.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterStatesComponent implements OnInit {

  form: FormGroup;
  model: State;
  countries: Country[] = [];
  statesList: State[] = [];

  constructor(private formBuilder: FormBuilder,
              private stateService: StateService,
              private countryService: CountryService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.model = new State();
    this.countryService.index().subscribe(res => {
      this.countries = res;
    });
    this.mountFormState();
  }

  onCountryClick(event): void {
    for (let country of event.selected)
      this.stateService.listByOneProperty('country.id', String(country.id)).subscribe(res => {
        this.statesList = res;
      });
  }

  onSubmit(): void {
    if (this.form.valid)
      this.countryService.getById(this.form.value.country.id).subscribe(country => {
        this.model.country = country;
        this.model.description = this.form.value.name;
        this.model.abbrev = this.form.value.abbrev;
        this.stateService.save(this.model).subscribe(res => {
          this.statesList.push(res);
          this.resetFormState();
          this.openDialog('Sucesso', 'Estado Salvo com Sucesso', 'OK')
        });
      });
    else
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  private resetFormState() {
    this.form.patchValue({
      country: null,
      name: null,
      abbrev: null
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

  private mountFormState() {
    this.form = this.formBuilder.group({
      country: [null, Validators.required],
      name: [null, Validators.required],
      abbrev: [null, Validators.required]
    });
  }

}

