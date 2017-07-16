import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Client} from "../../shared/model/user";
import {Sex} from "../../shared/model/sex";
import {Cep} from "../../shared/model/cep";
import {UserType} from "../../shared/model/user-type";
import {ClientService} from "../../shared/services/client.service";
import {Http} from "@angular/http";

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
  types: UserType = new UserType("Civil","4");

  ngAfterViewInit(): void {}

  constructor(private clientService: ClientService,
              private http: Http) { }

  ngOnInit() {
    this.sexos.push(new Sex("Masculino", "M"));
    this.sexos.push(new Sex("Feminino", "F"));

    this.types = new UserType("Civil","4");
  }

  onSubmit(){
    this.model.type = this.types.id;
    this.clientService.create(this.model).subscribe(
      g => {
        alert('sucesso');
      }, error => {
        this.errorMessage = <any> error;
        alert(this.errorMessage);
      }
    );
  }

  changeType(type){
    this.model.type = type;
  }

  getCEP(cep , form){
    cep = cep.replace(/\D/g, '');
    if ( cep != '') {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
      //valida o formado do CEP
      if (validacep.test(cep)){
        this.resetForm(form);
        //Consulta o webservice viacep.com.br/
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
