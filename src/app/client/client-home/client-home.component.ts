import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

  currentUserName: string;
  menu = [
    {route: 'licencas', title: 'Minhas Licenças'},
    {route: 'nova-licenca', title: 'Nova Licença'},
    {route: 'agendamento', title: 'Agendamentos'},
    {route: 'exames', title: 'Exames'},
    {route: 'atualizar', title: 'Atualizar meus dados'},
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.currentUserName = this.dataService.getUserName();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
