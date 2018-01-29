import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorHomeComponent implements OnInit {

  currentUserName: string;

  constructor() {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

}
