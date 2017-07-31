import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

  @Input() errorMessage: any;

  constructor() { }

  ngOnInit() {
  }

  hasErrors(){
    if(this.errorMessage > 0 || this.errorMessage == null )
      return true;
  }
}
