import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nome: string = 'LUCAS SARTORI';
}
