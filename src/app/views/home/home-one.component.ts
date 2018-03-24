import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-one',
  template: `
    <app-intro></app-intro>
    <app-cta [bg]="'bg1'" [title]="title1" [content]="content1"></app-cta>
    <app-tools></app-tools>
    <app-cta [bg]="'bg2'" [title]="title2" [content]="content2"></app-cta>
    <app-legislation></app-legislation>
    <app-cta [bg]="'bg3'" [title]="title3" [content]="content3"></app-cta>
    <app-validator></app-validator>
  `
})
export class HomeOneComponent implements OnInit {

  title1: string = "Funcionalidades no Sistema";
  title2: string = "Legislação";
  title3: string = "Checagem de Licenças";
  content1: string = "Conheça as funcionalidades do sistema";
  content2: string = "\n" +
    "Informe-se some a legislação vigente";
  content3: string = "\n" +
    "Deseja saber se a licença ainda esta na validade ou se é verdadeira? " +
    "E ainda caso ela seja verdadeira também saberá sua categoria e portador";

  constructor() {
  }

  ngOnInit() {

  }


}
