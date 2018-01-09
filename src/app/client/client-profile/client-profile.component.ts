import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {GenderService} from "../../shared/services/gender.service";
import {Gender} from "../../shared/model/gender";


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  errorMessage: string;
  model: User = new User();
  gender: Gender = new Gender();

  constructor(private userService: UserService,
              private genderService: GenderService) {
  }

  ngOnInit() {
    this.userService.show(localStorage.getItem("currentUserID")).subscribe(res => {
      this.model = res;
      this.genderService.show(res.gender.id).subscribe(res => this.gender = res);
    });
  }
}
