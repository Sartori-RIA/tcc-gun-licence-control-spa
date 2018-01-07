import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/model/user";
import {ClientService} from "../../shared/services/user.service";
import {FormCanDeactivate} from "../../shared/model/form-can-deactivate";


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit, FormCanDeactivate {

  errorMessage: string;
  model: User = new User();
  formChange: boolean = false;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.show(localStorage.getItem("currentUserID")).subscribe(res => this.model = res);
  }


  canDesactive() {
    this.formChange = true;
  }
}
