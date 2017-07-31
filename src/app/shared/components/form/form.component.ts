import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ExaminatorService} from "../../services/examinator.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Sex} from "../../model/sex";
import {Cep} from "../../model/cep";
import {Client} from "../../model/client";
import {UserType} from "../../model/user-type";
import {SexService} from "../../services/sex.service";
import {UserCategoryService} from "../../services/user-category.service";
@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  model: Client = new Client;
  cep: Cep = new Cep();
  errorMessage: string;
  sexos: Sex[] = [];
  types: UserType;
  ngAfterViewInit(): void {}

  constructor(private examinatorService: ExaminatorService,
              private http: Http,
              private sexService: SexService,
              private userCategoryService: UserCategoryService
  ) { }

  ngOnInit() {
    this.sexService.index().subscribe(res => this.sexos = res);
    this.userCategoryService.index().subscribe(res => this.types = res)
  }

  onSubmit(){
    this.model.type = this.types.id;
    this.examinatorService.create(this.model).subscribe();
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

  /** digitar apenas numeros
   */
  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
