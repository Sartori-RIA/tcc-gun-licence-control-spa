import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <section>
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>`
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
