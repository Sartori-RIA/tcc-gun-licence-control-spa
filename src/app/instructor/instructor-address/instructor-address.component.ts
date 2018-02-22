import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Address} from "../../shared/model/address";
import {UserService} from "../../shared/services/user.service";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-instructor-address',
  templateUrl: './instructor-address.component.html',
  styleUrls: ['./instructor-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorAddressComponent implements OnInit {

  listAddress: boolean;
  addAddress: boolean;
  addressList: Address[];

  constructor(private userService: UserService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.listAddress = false;
    this.addAddress = false;
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.addressList = res.addressList;
    }, error2 => this.httpErrorService.verifyErrors(error2))
  }
}
