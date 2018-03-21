import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {WOW} from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit, AfterViewInit {
  @Input('backgroundGray') public backgroundGray;

  constructor() {
  }

  ngAfterViewInit(): void {
    new WOW().init();
  }

  ngOnInit() {
  }

}
