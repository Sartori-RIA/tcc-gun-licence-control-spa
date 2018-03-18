import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

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
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = localStorage.getItem("currentUserName")
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
