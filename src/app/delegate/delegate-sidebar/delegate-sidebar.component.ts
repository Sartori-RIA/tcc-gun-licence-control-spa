import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-delegate-sidebar',
  templateUrl: './delegate-sidebar.component.html',
  styleUrls: ['./delegate-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelegateSidebarComponent implements OnInit {

  menu = [
    {route: 'enderecos', title: 'Meus Endereços'},
    {route: 'avaliacoes', title: 'Avaliações'},
    {route: 'relatorios', title: 'Relatórios'},
    {route: 'perfil', title: 'Meus Dados'},
  ]

  constructor() {
  }

  ngOnInit() {
  }
}
