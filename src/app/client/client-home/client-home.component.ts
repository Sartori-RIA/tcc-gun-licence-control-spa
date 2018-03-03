import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

  currentUserName: string;
  menu = [
    {route: 'licencas', title: 'Minhas Licenças'},
    {route: 'agendamento', title: 'Agendamentos'},
    {route: 'exames', title: 'Exames'},
    {route: 'atualizar', title: 'Atualizar meus dados'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName")
  }
}
