import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";

@Component({
  selector: 'app-shared-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
