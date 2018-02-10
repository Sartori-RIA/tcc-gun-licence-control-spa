import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.scss']
})
export class ClientSidebarComponent implements OnInit {

  menu = [
    {route: 'agendamento', title: 'Agendamentos'},
    {route: 'exames', title: 'Exames'},
    {route: 'perfil', title: 'Meus Dados'},
    {route: 'enderecos', title: 'Meus Endereços'},
    {route: 'licencas', title: 'Minhas Licenças'},
    {route: 'atualizar', title: 'Atualizar meus dados'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
