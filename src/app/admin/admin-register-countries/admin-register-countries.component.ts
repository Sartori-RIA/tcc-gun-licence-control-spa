import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../shared/services/country.service";
import {Country} from "../../shared/model/country";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "../../shared/components/dialog/dialog.component";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-admin-register-countries',
  templateUrl: './admin-register-countries.component.html',
  styleUrls: ['./admin-register-countries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterCountriesComponent implements OnInit {

  countryList: Country[] = [];
  form: FormGroup;
  private model: Country;

  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService,
              private dialog: MatDialog,
              private httpErrorService: HttpErrorService) {
  }


  ngOnInit() {
    this.model = new Country();
    this.mountFormCountry();
    this.countryService.index().subscribe(res => {
      this.countryList = res;
    }, error2 => this.httpErrorService.verifyErrors(error2));
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.model.description = this.form.value.name;
      this.countryService.save(this.model).subscribe(res => {
        this.countryList.push(res);
        this.resetFormCountry();
        this.openDialog("Sucesso", "Pais cadastrado com Sucesso", "Ok")
      }, error => this.httpErrorService.verifyErrors(error, "Não foi possivel efetuar o cadastro"));
    } else {
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

  private mountFormCountry() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
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

  private resetFormCountry() {
    this.form.patchValue({
      name: null
    });
  }
}
