import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-psychologist-sidebar',
  templateUrl: './psychologist-sidebar.component.html',
  styleUrls: ['./psychologist-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistSidebarComponent implements OnInit {

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
