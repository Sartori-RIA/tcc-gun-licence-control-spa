import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ExaminatorService} from "../../services/examinator.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Sex} from "../../model/sex";
import {Cep} from "../../model/cep";
import {Client} from "../../model/client";
import {MdDatepicker} from "@angular/material";
@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @Input() model: Client = new Client;
  errorMessage: string;
  sexos:Sex[] = [];
  @Input() cep: Cep = new Cep();
  @ViewChild(MdDatepicker) dp: MdDatepicker<Date>;
  ngAfterViewInit(): void {

  }

  constructor(private examinatorService: ExaminatorService,
              private http: Http) { }

  ngOnInit() {
    this.sexos.push(new Sex("Masculino", "M"));
    this.sexos.push(new Sex("Feminino", "F"));
  }

  onSubmit(){
    this.examinatorService.create(this.model).subscribe(
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
