import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Address} from '../../model/address';
import {AddressService} from "../../service/address.service";

@Component({
  selector: 'app-user-address-list',
  templateUrl: './user-address-list.component.html',
  styleUrls: ['./user-address-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserAddressListComponent implements OnInit {

  @Input() model: Address;

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
  }

  remove(){
    this.addressService.destroy(this.model.id).subscribe(
      res => console.log("REMOVEU")
    );
  }
}
