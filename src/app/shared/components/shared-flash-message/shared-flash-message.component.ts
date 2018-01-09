import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-flash-message',
  templateUrl: './shared-flash-message.component.html',
  styleUrls: ['./shared-flash-message.component.scss']
})
export class SharedFlashMessageComponent implements OnInit {

  @Input() errorMessage: any;

  constructor() {
  }

  ngOnInit() {
    this.hasError()
  }

  hasError() {
    if (this.errorMessage > 0 || this.errorMessage != null)
      return true;
  }

  close() {
    this.errorMessage = null;
  }
}
