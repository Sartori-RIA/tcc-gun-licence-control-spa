import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Address} from "../../model/address";

@Component({
  selector: 'app-shared-user-address-list',
  templateUrl: './shared-user-address-list.component.html',
  styleUrls: ['./shared-user-address-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedUserAddressListComponent implements OnInit {

  @Input() model: Address;

  constructor() { }

  ngOnInit() {
  }

}
