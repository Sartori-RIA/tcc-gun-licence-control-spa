import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  menu = [
    {route: 'agendamento', title: 'Agendamentos'},
    {route: 'exames', title: 'Exames'},
    {route: 'perfil', title: 'Meus Dados'},
    {route: 'enderecos', title: 'Meus Endereços'},
    {route: 'licencas', title: 'Minhas Licenças'},
    {route: 'atualizar', title: 'Atualizar meus dados'},
  ]

}
