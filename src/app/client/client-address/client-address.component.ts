import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Address} from "../../shared/model/address";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientAddressComponent implements OnInit {

  listAddress: boolean;
  addAddress: boolean;
  addressList: Address[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listAddress = false;
    this.addAddress = false;
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res =>{
      this.addressList = res.addressList;
    })
  }
}
