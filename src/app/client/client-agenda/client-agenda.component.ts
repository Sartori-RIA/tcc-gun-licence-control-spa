import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/user';
import {UserService} from '../../shared/service/user.service';

@Component({
  selector: 'app-client-agenda',
  templateUrl: './client-agenda.component.html',
  styleUrls: ['./client-agenda.component.scss']
})
export class ClientAgendaComponent implements OnInit {
  psychologistList: User[];
  instructorList: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.listByOneProperty('role.description', 'PSICOLOGO').subscribe(res => {
      this.psychologistList = res
    });
    this.userService.listByOneProperty('role.description', 'INSTRUTOR').subscribe(res => {
      this.instructorList = res
    });
  }
}
