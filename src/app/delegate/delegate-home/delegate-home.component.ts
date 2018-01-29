import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-delegate-home',
  templateUrl: './delegate-home.component.html',
  styleUrls: ['./delegate-home.component.scss']
})
export class DelegateHomeComponent implements OnInit {

  currentUserName: string;

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

}
