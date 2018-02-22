import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/model/user";
import {Gender} from "../../shared/model/gender";
import {GenderService} from "../../shared/services/gender.service";
import {HttpErrorService} from "../../shared/services/http-error.service";

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorProfileComponent implements OnInit {

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
