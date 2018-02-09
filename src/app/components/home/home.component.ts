import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  elements = ELEMENT;

  constructor() {
  }

  ngOnInit() {
  }

}

export interface HOME {
  title: string;
  content: string;
}

const ELEMENT: HOME[] = [
  {title: "Validador de licenças", content:"<p>Deseja saber se a licença ainda esta na validade ou se é verdadeira? E ainda caso ela seja verdadeira também" +
    "        saberá sua categoria e portador<br>" +
    "        <a routerLink='/validador' routerLinkActive='active'>Mais detalhes &raquo;</a></p>"},
  {title: "Duvidas?", content:"<p>Ficou com alguma duvida sobre o sistema, como é o processo para a obtenção das licenças, ou alguma outra duvida" +
    "        relacionada ao assunto?<br/>" +
    "        <a routerLink='/duvidas' routerLinkActive='active'>Mais detalhes &raquo;</a></p>"},
  {title: "Login", content:'<p>Efetue o login no sistema para que possa realizar divesas tarefas como: Agendamento de exames, impressão das' +
    "        licencas que possui, laudo dos exames realizados e muitas outras<br>" +
    "        <a href='#' role='button' routerLink='/login' routerLinkActive='active'>Mais detalhes &raquo;</a></p>"},
  {title: "Cadastro", content:"<p>Deseja obter sua licenca mas ainda não tem canastro no nosso sistema?<br/>" +
    "        <a  href='#' role='button' routerLink='/usuario/cadastro' routerLinkActive='active'>Mais" +
    "          detalhes &raquo;</a></p>" }
];
