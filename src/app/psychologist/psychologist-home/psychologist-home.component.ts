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
    this.currentUserName = localStorage.getItem("currentUserName");
  }

}
