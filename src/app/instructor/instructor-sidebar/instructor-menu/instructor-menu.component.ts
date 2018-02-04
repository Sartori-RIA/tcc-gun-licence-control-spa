import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-instructor-menu',
  templateUrl: './instructor-menu.component.html',
  styleUrls: ['./instructor-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorMenuComponent implements OnInit {

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
