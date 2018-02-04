import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-psychologist-menu',
  templateUrl: './psychologist-menu.component.html',
  styleUrls: ['./psychologist-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  menu = [
    {route: 'enderecos', title: 'Meus Endereços'},
    {route: 'avaliacoes', title: 'Avaliações'},
    {route: 'relatorios', title: 'Relatórios'},
    {route: 'perfil', title: 'Meus Dados'},
  ]
}
