import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-psychologist-home',
  templateUrl: './psychologist-home.component.html',
  styleUrls: ['./psychologist-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistHomeComponent implements OnInit {

  currentUserName: string;
  menu = [
    {route: 'enderecos', title: 'Meus Endereços'},
    {route: 'avaliacoes', title: 'Avaliações'},
    {route: 'relatorios', title: 'Relatórios'},
    {route: 'perfil', title: 'Meus Dados'},
  ];
  
  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

}
