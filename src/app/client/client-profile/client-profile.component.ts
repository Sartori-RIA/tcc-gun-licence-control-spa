import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {GenderService} from "../../shared/services/gender.service";
import {Gender} from "../../shared/model/gender";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  model: User = new User();
  gender: Gender = new Gender();

  constructor(private userService: UserService,
              private genderService: GenderService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.model = res;
      this.genderService.getById(res.gender.id)
        .subscribe(res => this.gender = res, error2 => this.httpErrorService.verifyErrors(error2));
    }, error2 => this.httpErrorService.verifyErrors(error2));
  }
}
