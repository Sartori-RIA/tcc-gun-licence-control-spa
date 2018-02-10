import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-psychologist-home',
  templateUrl: './psychologist-home.component.html',
  styleUrls: ['./psychologist-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistHomeComponent implements OnInit {

  currentUserName: string;

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

  tiles: any[] = [{
    text: 'One',
    cols: 3,
    rows: 1,
    color: 'lightblue'
  }, {
    text: 'Two',
    cols: 1,
    rows: 2,
    color: 'lightgreen'
  }, {
    text: 'Three',
    cols: 1,
    rows: 1,
    color: 'lightpink'
  }, {
    text: 'Four',
    cols: 2,
    rows: 1,
    color: '#DDBDF1'
  }];


}
