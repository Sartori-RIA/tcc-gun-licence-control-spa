import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientUpdateComponent implements OnInit {

  model: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => this.model = res)
  }

}
