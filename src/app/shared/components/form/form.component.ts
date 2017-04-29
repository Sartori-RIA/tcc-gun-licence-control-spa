import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../model/Client";

@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() model: Client = new Client;

  constructor() { }

  ngOnInit() {
  }

  nome: string = 'LUCAS SARTORI';
}
