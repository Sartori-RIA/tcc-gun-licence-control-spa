import {Component, Input, OnInit} from '@angular/core';
import {ExaminatorService} from "../../services/examinator.service";
import 'rxjs/add/operator/map';
import {Sex} from "../../model/sex";
import {Cep} from "../../model/cep";
import {User} from "../../model/user";
import {UserRole} from "../../model/user-role";
import {SexService} from "../../services/sex.service";
import {UserCategoryService} from "../../services/user-category.service";
import {FormCanDeactivate} from "../../model/form-can-deactivate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CepService} from "../../services/cep.service";

@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, FormCanDeactivate {

  @Input() isClient: boolean = false;
  model: User = new User();
  cep: Cep = new Cep();
  errorMessage: string;
  sexos: Sex[] = [];
  roles: UserRole[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private examinatorService: ExaminatorService,
              private sexService: SexService,
              private userCategoryService: UserCategoryService,
              private cepService: CepService) {
  }

  canDesactive() {
  }

  ngOnInit() {
    this.sexService.index().subscribe(res => this.sexos = res);
    this.userCategoryService.index().subscribe(res => this.roles = res)

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      sex: [null, Validators.required],
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

  onSubmit() {
    if (this.form.valid) {
      this.examinatorService.create(this.model).subscribe(res => {
        window.location.reload();
      }, error => alert('ocorreu um erro' + error));
    } else this.formDirty(this.form);
  }

  getCEP() {
    this.cepService.getCEP(this.form.value.cep).subscribe(res => this.populateAddress(res))
  }

  private populateAddress(dados) {
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

  private resetAddess(){
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
