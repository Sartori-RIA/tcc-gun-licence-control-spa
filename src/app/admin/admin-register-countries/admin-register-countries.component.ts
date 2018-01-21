import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../shared/services/country.service";
import {Country} from "../../shared/model/country";

@Component({
  selector: 'app-admin-register-countries',
  templateUrl: './admin-register-countries.component.html',
  styleUrls: ['./admin-register-countries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminRegisterCountriesComponent implements OnInit {

  form: FormGroup;
  private model: Country;
  constructor(private formBuilder: FormBuilder,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.model = new Country();
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    })
  }

  onSubmit(): void {
    if(this.form.valid){
      this.model.description = this.form.value.name;
      this.countryService.save(this.model).subscribe(res =>{
        window.location.reload();
      }, error2 => alert(JSON.stringify(error2)))
    }else{
      Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
    }
  }

}
