import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../shared/model/user';
import {UserService} from '../../shared/service/user.service';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientUpdateComponent implements OnInit {

  model: User;

  constructor(private userService: UserService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.userService.findByOneProperty('cpf', this.dataService.getUserCPF())
      .subscribe(res => this.model = res)
  }

}
