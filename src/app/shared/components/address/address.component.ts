import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Address} from "../../model/address";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit {

  @Input() addressList: Address[];

  constructor() {
  }

  ngOnInit() {
  }

  newAddress(event){
    this.addressList.push(event)
  }
}
