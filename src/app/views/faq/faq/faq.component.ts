import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit() {

  }

}

export interface Faq {
  header: string;
  content: string;
}


const ELEMENT_DATA: Faq[] = [
  {
    header: ' Como faço para atirar pela primeira vez??',
    content: 'Se você nunca atirou, e tem curiosidade, basta ir a um clube ou estande de tiro. Lá é o melhor local' +
    '          para obter informações, treinamento básico e atirar pela primeira vez.' +
    '          Não é preciso ter porte, nem registro, nem CR, nem mesmo arma. Basta ir com seu documento de' +
    '          identificação e você será bem recebido.' +
    '          Há uma <a href="http://www.defesa.org/estandes-e-clubes-de-tiro/">lista completa dos clubes' +
    '            e estandes de tiro</a> de todo o Brasil na ong Defesa.org. É só procurar pelo mais próximo e ir!'
  },
  {
    header: 'Como comprar uma arma legalmente', content: '<ul>' +
    '            <li>Ter, no mínimo, 25 anos de idade.</li>' +
    '            <li>Ter residência fixa e ocupação lícita</li>' +
    '            <li>Aptidão técnica e psicológica</li>' +
    '            <li>Não ter antecedentes criminais</li>' +
    '          </ul>' +
    '' +
    '          <p>Preencha e imprima o <a class="btn-link"' +
    '                                     href="http://www.dpf.gov.br/servicos/armas/form-sinarm">formulário</a>' +
    '          </p>' +
    '          <p>Dirija-se a uma unidade da Polícia Federal munido:</p>' +
    '          <ul>' +
    '            <li>Cópias autenticadas de RG, CPF, Comprovante de Endereço;</li>' +
    '            <li>Declaração de necessidade;</li>' +
    '            <li>Certidões negativas de antecedentes criminais fornecidas pela Justiça Federal, Estadual (incluindo' +
    '              Juizados Especiais Criminais), Militar e Eleitoral e de não estar respondendo a inquérito policial ou' +
    '              a processo criminal, que poderão ser fornecidas por meios eletrônicos;' +
    '            </li>' +
    '            <li>Documento comprobatório de ocupação lícita;</li>' +
    '            <li>Exame técnico por instrutor credenciado na PF (Lista dos Instrutores Credenciados)</li>' +
    '            <li>Exame psicológico por psicólogo credenciado na PF (Lista de Psicólogos Credenciados)</li>' +
    '            <li>Uma foto 3×4</li>' +
    '          </ul>' +
    '          <p>Assim que a sua autorização estiver em mãos, você terá 30 dias para comprar sua arma.' +
    '            Depois que receber sua Nota Fiscal, é necessário fazer o registro, sem o qual você não poderá' +
    '            retirar a ama da loja.</p>' +
    '          <p>Para isso, é necessário fazer o pagamento de <a href="https://www2.dpf.gov.br/gru/gru?nac=0">TAXA</a>' +
    '            no valor de R$60,00</p>' +
    '          <p>Depois de paga, dirija-se a uma Unidade da Polícia Federal com os seguintes documentos:</p>' +
    '          <ul class="ordem-alfabetica">' +
    '            <li>autorização para aquisição de arma de fogo;</li>' +
    '            <li>nota fiscal de compra de arma de fogo;</li>' +
    '            <li>comprovante bancário de pagamento da taxa devida para a emissão do documento através da Guia de' +
    '              Recolhimento da União – GRU.' +
    '            </li>' +
    '          </ul>'
  },
  {header: 'Legislação Vigente 10.826/2003', content: 'texto'},
  {
    header: 'PL 3.722/2012 ',
    content: '<a href="http://www.defesa.org/pl-37222012/">PL3722/12</a> Projeto de lei formulado pelo deputado <a' +
    '          class="btn-link" href="http://www.deputadopeninha.com.br/placar-pl-3722"> Rogério Peninha Mendonça</a>' +
    '<p>É um projeto de lei que altera a legislação sobre armas e munições no Brasil, flexibilizando as normas em vigor' +
    ' para que as pessoas de bem possam ter acesso legal aos instrumentos mais eficazes à legítima defesa</p>'
  },
  {header: 'Como utilizar o Sistema?', content: ''},
  {header: 'Porque devo utilizar o sistema?', content: ''},
  {header: 'Qual a finalidade deste Sistema?', content: ''},
  {header: 'Quais são as etapas para obter minha Licensa?', content: ''},
  {header: 'Como Renovo minha Licensa', content: ''},
  {header: 'Encontrei um problema no Sistema e Agora?', content: ''}
];

