import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-examinator-home',
  templateUrl: './examinator-home.component.html',
  styleUrls: ['./examinator-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExaminatorHomeComponent implements OnInit {

  currentUserName: string;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.currentUserName = localStorage.getItem("currentUserName");
    this.route.navigate(['/examinador/avaliacoes'])
  }

}
