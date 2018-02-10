import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shared-hello',
  templateUrl: './shared-hello.component.html',
  styleUrls: ['./shared-hello.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedHelloComponent implements OnInit {

  @Input() currentUserName: string;

  constructor() { }

  ngOnInit() {
  }

}
