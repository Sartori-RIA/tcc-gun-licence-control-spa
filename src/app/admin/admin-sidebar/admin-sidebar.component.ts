import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  menu = [
    {route: 'cadastro/usuario', title: 'Cadastro de Usuário'},
    {route: 'cadastro/paises', title: 'Cadastro de Paises'},
    {route: 'cadastro/estados', title: 'Cadastro de Estados'},
    {route: 'cadastro/cidades', title: 'Cadastro de Cidades'},
    {route: 'cadastro/exames', title: 'Cadastro de Exames'},
    {route: 'cadastro/licencas', title: 'Cadastro de Categorias de Licenças'},
    {route: 'relatorios', title: 'Relatórios'},
    {route: 'perfil', title: 'Meus Dados'},
  ]

  constructor() {
  }

  ngOnInit() {
  }
}
