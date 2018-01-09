import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-campo-control-error',
  templateUrl: './shared-campo-control-error.component.html',
  styleUrls: ['./shared-campo-control-error.component.scss']
})
export class CampoControlErrorComponent implements OnInit {

  @Input() showErro: boolean;
  @Input() msgErro: string;

  constructor() {
  }

  ngOnInit() {
  }

}
