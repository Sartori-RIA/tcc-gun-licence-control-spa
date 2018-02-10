import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {State} from "../../shared/model/state";
import {StateService} from "../../shared/services/state.service";
import {CountryService} from "../../shared/services/country.service";
import {Country} from "../../shared/model/country";
import {SharedDialogComponent} from "../../shared/components/shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";

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
  statesList: State[];
  rowsCountry: CountryTable[] = [];
  columnsCountry = [];
  rowsState: StateTable[] = [];
  columnsState = [];

  constructor(private formBuilder: FormBuilder,
              private stateService: StateService,
              private countryService: CountryService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.model = new State();
    this.countryService.index().subscribe(res =>{
      this.countries = res;
      for(let item of res)
        this.rowsCountry.push({id: item.id, name: item.description})
    });
    this.form = this.formBuilder.group({
      country: [null, Validators.required],
      name: [null, Validators.required],
      abbrev: [null, Validators.required]
    });
    this.columnsCountry = [
      {prop: 'id'},
      {name: 'description'},
    ];
    this.columnsState = [
      {prop: 'id'},
      {name: 'description'},
      {name: 'abbrev'},
    ];
  }

   onCountryClick(country): void {
    console.log(country)
  //   this.stateService.listByOneProperty("country.id", String(country.id)).subscribe(res => {
  //     this.statesList = res;
  //     for(let item of res)
  //       this.rowsState.push({id: item.id, name: item.description, abbrev: item.abbrev })
  //   });
  }

  onSubmit(): void {
    if (this.form.valid)
      this.countryService.getById(this.form.value.country.id).subscribe(country => {
        this.model.country = country;
        this.model.description = this.form.value.name;
        this.model.abbrev = this.form.value.abbrev;
        this.stateService.save(this.model).subscribe(res => {
          this.statesList.push(res);
          this.form.patchValue({
            country: null,
            name: null,
            abbrev: null
          });
          this.openDialog("Sucesso", "Estado Salvo com Sucesso", "OK")
        }, () => this.openDialog("Erro", "Erro ao Salvar", "OK"));
      });
    else
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
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

export interface CountryTable {
  id: number;
  name: string;
}

export interface StateTable {
  id: number;
  name: string;
  abbrev: string;
}
