import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../model/Client";

@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() model: Client = new Client();

  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo){
    return {
      'has-error' : this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    }
  }
}
