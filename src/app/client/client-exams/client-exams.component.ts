import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";
import {ClientService} from "../../shared/services/user.service";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  models: User[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.index();
  }

  index() {
    this.clientService.index()
      .subscribe(data => this.models = data);
  }

}
