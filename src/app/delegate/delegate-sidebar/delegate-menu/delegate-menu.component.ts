import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-delegate-menu',
  templateUrl: './delegate-menu.component.html',
  styleUrls: ['./delegate-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelegateMenuComponent implements OnInit {

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
