import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-delegate-home',
  templateUrl: './delegate-home.component.html',
  styleUrls: ['./delegate-home.component.scss']
})
export class DelegateHomeComponent implements OnInit {

  currentUserName: string;
  menu = [
    {route: 'relatorios', title: 'Relatórios'},
    {route: 'perfil', title: 'Meus Dados'},
  ];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.currentUserName = this.dataService.getUserName();
  }

}
