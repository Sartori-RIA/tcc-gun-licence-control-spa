import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  currentUserName: string;
  menu = [
    {route: 'cadastro/usuario', title: 'Cadastro de Usuário'},
    {route: 'cadastro/paises', title: 'Cadastro de Paises'},
    {route: 'cadastro/estados', title: 'Cadastro de Estados'},
    {route: 'cadastro/cidades', title: 'Cadastro de Cidades'},
    {route: 'cadastro/exames', title: 'Cadastro de Exames'},
    {route: 'cadastro/licencas', title: 'Cadastro de Categorias de Licenças'}
  ];

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }
}
