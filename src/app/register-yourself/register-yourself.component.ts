import { Component, OnInit } from '@angular/core';
import {Client} from "../shared/model/client";
import {Cep} from "../shared/model/cep";
import {Sex} from "../shared/model/sex";
import {UserRole} from "../shared/model/user-role";
import {ClientService} from "../shared/services/client.service";
import {SexService} from "../shared/services/sex.service";
import {UserCategoryService} from "../shared/services/user-category.service";
import {Http} from "@angular/http";
import {FormCanDeactivate} from "../shared/model/form-can-deactivate";

@Component({
  selector: 'app-register-yourself',
  templateUrl: './register-yourself.component.html',
  styleUrls: ['./register-yourself.component.scss']
})
export class RegisterYourselfComponent implements OnInit, FormCanDeactivate {

  model: Client = new Client;
  cep: Cep = new Cep();
  errorMessage: string;
  sexos: Sex[] = [];
  roles: UserRole[] = [];
  formChange: boolean = false;
  constructor(private clientService: ClientService,
              private sexService: SexService,
              private userCategoryService: UserCategoryService,
              private http: Http) { }

  ngOnInit() {
    this.sexService.index().subscribe(res => this.sexos = res);
    this.userCategoryService.index().subscribe(res => this.roles[4]);
  }


  canDesactive() {
    this.formChange = true;
  }

  onSubmit(){
    this.clientService.create(this.model).subscribe();
  }

  getCEP(cep , form){
    cep = cep.replace(/\D/g, '');
    if ( cep != '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)){
        this.resetForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json/`).map(dados => dados.json()).subscribe(dados => this.populaDados(dados, form));

      }
    }
  }

  populaDados(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        numero: null,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetForm(formulario){
    this.cep = null;
  }

}
