import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = localStorage.getItem("currentUserName");
  }

}
