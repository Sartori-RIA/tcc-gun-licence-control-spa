import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Client} from "../../shared/model/client";
import {Sex} from "../../shared/model/sex";
import {Cep} from "../../shared/model/cep";
import {UserType} from "../../shared/model/user-type";
import {ClientService} from "../../shared/services/client.service";
import {Http} from "@angular/http";
import {SexService} from "../../shared/services/sex.service";
import {UserCategoryService} from "../../shared/services/user-category.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit{

  model: Client = new Client;
  cep: Cep = new Cep();
  errorMessage: string;
  sexos: Sex[] = [];
  types: UserType;

  ngAfterViewInit(): void {}

  constructor(private clientService: ClientService,
              private sexService: SexService,
              private userCategoryService: UserCategoryService,
              private http: Http) { }

  ngOnInit() {
    this.sexService.index().subscribe(res => this.sexos = res);
    this.userCategoryService.index().subscribe(res => this.types[4]);
  }

  onSubmit(){
    this.model.type = this.types.id;
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
