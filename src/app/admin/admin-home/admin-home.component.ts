import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  currentUserName: string;

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

}
