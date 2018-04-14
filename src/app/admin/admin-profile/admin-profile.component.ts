import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../shared/model/user';
import {Gender} from '../../shared/model/gender';
import {UserService} from '../../shared/service/user.service';
import {GenderService} from '../../shared/service/gender.service';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProfileComponent implements OnInit {

  model: User = new User();
  gender: Gender = new Gender();

  constructor(private userService: UserService,
              private genderService: GenderService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.userService.getById(this.dataService.getUserID()).subscribe(res => {
      this.model = res;
      this.genderService.getById(res.gender.id).subscribe(res => this.gender = res)
    });
  }

}
