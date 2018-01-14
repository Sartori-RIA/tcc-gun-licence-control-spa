import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Gender} from "../../model/gender";
import {Cep} from "../../model/cep";
import {User} from "../../model/user";
import {UserRole} from "../../model/user-role";
import {GenderService} from "../../services/gender.service";
import {UserCategoryService} from "../../services/user-category.service";
import {FormCanDeactivate} from "../../model/form-can-deactivate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CepService} from "../../services/cep.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./form.component.scss']
})
export class SharedFormComponent implements OnInit, FormCanDeactivate {

  @Input() isClient: boolean = false;
  model: User = new User();
  cep: Cep = new Cep();
  errorMessage: string;
  genders: Gender[] = [];
  roles: UserRole[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private cepService: CepService) {
  }

  canDesactive() {
  }

  ngOnInit() {
    this.genderService.index().subscribe(res => this.genders = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
    this.buildReactiveForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.converFormBuilderToModel();
      console.log(JSON.stringify(this.model));
      this.userService.create(this.model).subscribe(res => {
        window.location.reload();
        console.log(res)
      }, error => alert('ocorreu um erro' + error));
    } else this.formDirty(this.form);
  }

  getCEP(): void {
    this.cepService.getCEP(this.form.value.cep).subscribe(res => this.populateAddress(res))
  }

  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      cpf: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      cep: [null, Validators.required],
      neighborhood: [null, Validators.required],
      complement: [null, Validators.required],
      addressNumber: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      street: [null, Validators.required],
      role: [null, Validators.required]
    })
  }

  private converFormBuilderToModel(): void {
    this.model.name = this.form.value.name;
    this.model.gender = this.form.value.gender;
    this.model.street = this.form.value.street;
    this.model.dateOfBirth = this.form.value.dateOfBirth;
    this.model.cpf = this.form.value.cpf;
    this.model.cep = this.form.value.cep;
    this.model.state = this.form.value.state;
    this.model.city = this.form.value.city;
    this.model.neighborhood = this.form.value.neighborhood;
    this.model.addressNumber = this.form.value.addressNumber;
    this.model.password = this.form.value.password;
    this.model.email = this.form.value.email;
    this.model.role = this.form.value.role;
    this.model.complement = this.form.value.complement;
  }

  private populateAddress(dados): void {
    this.form.patchValue({
      cep: dados.cep,
      street: dados.logradouro,
      addressNumber: null,
      complement: dados.complemento,
      neighborhood: dados.bairro,
      city: dados.localidade,
      state: dados.uf
    });
  }

  private resetAddess(): void {
    this.form.patchValue({
      cep: null,
      street: null,
      addressNumber: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null
    });
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }

}
