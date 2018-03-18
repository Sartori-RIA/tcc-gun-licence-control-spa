import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user';
import {Gender} from '../../shared/model/gender';
import {UserService} from '../../shared/service/user.service';
import {GenderService} from '../../shared/service/gender.service';
import {HttpErrorService} from '../../shared/service/http-error.service';
import {DataService} from '../../shared/auth/data.service';

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
              private httpErrorService: HttpErrorService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.userService.getById(this.dataService.getUserID()).subscribe(res => {
      this.model = res;
      this.genderService.getById(res.gender.id)
        .subscribe(res => this.gender = res, error2 => this.httpErrorService.verifyErrors(error2));
    }, error2 => this.httpErrorService.verifyErrors(error2));
  }
}
