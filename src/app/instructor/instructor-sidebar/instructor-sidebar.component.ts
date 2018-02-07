import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrls: ['./instructor-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorSidebarComponent implements OnInit {

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
