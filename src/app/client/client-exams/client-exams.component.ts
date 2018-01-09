import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  models: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.index();
  }

  index() {
    this.userService.index().subscribe(data => this.models = data);
  }

}
