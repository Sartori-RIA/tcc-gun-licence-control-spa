import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientUpdateComponent implements OnInit {

  model: User;

  constructor(private userService: UserService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.userService.findByOneProperty("cpf", localStorage.getItem("currentUserCPF"))
      .subscribe(res => this.model = res, error2 => this.httpErrorService.verifyErrors(error2))
  }

}
