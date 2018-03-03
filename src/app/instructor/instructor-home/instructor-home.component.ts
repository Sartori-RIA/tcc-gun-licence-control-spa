import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorHomeComponent implements OnInit {

  currentUserName: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
    this.route.navigate(['/instrutor/avaliacoes'])
  }

}
