import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../shared/services/country.service";
import {Country} from "../../shared/model/country";
import {MatDialog} from "@angular/material";
import {SharedDialogComponent} from "../../shared/components/shared-dialog/shared-dialog.component";

@Component({
  selector: 'app-admin-register-countries',
  templateUrl: './admin-register-countries.component.html',
  styleUrls: ['./admin-register-countries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterCountriesComponent implements OnInit {

  countryList: Country[];
  form: FormGroup;
  private model: Country;

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.model = new Country();
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
    this.countryService.index().subscribe(res => this.countryList = res);
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }


  onSubmit(): void {
    if (this.form.valid) {
      this.model.description = this.form.value.name;
      this.countryService.save(this.model).subscribe(res => {
        this.countryList.push(res);
        this.form.patchValue({
          name: null
        });
        this.openDialog("Sucesso", "Pais cadastrado com Sucesso", "Ok")
      }, () => this.openDialog("Erro", "Não foi possivel efetuar o cadastro", "Ok"));
    } else {
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

}
