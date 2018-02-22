import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {Gender} from "../../shared/model/gender";
import {GenderService} from "../../shared/services/gender.service";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
  styleUrls: ['./psychologist-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistProfileComponent implements OnInit {

  model: User = new User();
  gender: Gender = new Gender();

  constructor(private userService: UserService,
              private genderService: GenderService,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.userService.getById(sessionStorage.getItem("currentUserID")).subscribe(res => {
      this.model = res;
      this.genderService.getById(res.gender.id).subscribe(res => this.gender = res, error2 => this.httpErrorService.verifyErrors(error2));
    }, error2 => this.httpErrorService.verifyErrors(error2));
  }
}
