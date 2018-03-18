import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-legislation',
  templateUrl: './legislation.component.html',
  styleUrls: ['./legislation.component.scss']
})
export class LegislationComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() {
  }

  ngOnInit() {
  }
}
