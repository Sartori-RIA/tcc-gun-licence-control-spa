import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Address} from '../../shared/model/address';
import {UserService} from '../../shared/service/user.service';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-delegate-address',
  templateUrl: './delegate-address.component.html',
  styleUrls: ['./delegate-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DelegateAddressComponent implements OnInit {

  listAddress: boolean;
  addAddress: boolean;
  addressList: Address[];

  constructor(private userService: UserService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.listAddress = false;
    this.addAddress = false;
    this.userService.getById(this.dataService.getUserID()).subscribe(res => this.addressList = res.addressList)
  }
}
