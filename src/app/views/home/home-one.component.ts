import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-one',
  template: `
    <app-intro></app-intro>
    <app-tools></app-tools>
    <app-legislation></app-legislation>
    <app-validator></app-validator>
  `
})
export class HomeOneComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }


}
