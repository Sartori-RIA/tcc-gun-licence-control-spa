import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-lists',
  templateUrl: './shared-lists.component.html',
  styleUrls: ['./shared-lists.component.scss']
})
export class SharedListsComponent implements OnInit {
  @Input() model: any;

  constructor() {
  }

  ngOnInit() {
  }

}
