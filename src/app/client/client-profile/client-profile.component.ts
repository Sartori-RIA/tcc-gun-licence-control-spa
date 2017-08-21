import {Component, OnInit} from '@angular/core';
import {Client} from "../../shared/model/client";
import {ClientService} from "../../shared/services/client.service";
import {FormCanDeactivate} from "../../shared/model/form-can-deactivate";


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit, FormCanDeactivate {

  errorMessage: string;
  model: Client = new Client();
  formChange: boolean = false;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }


  canDesactive() {
    this.formChange = true;
  }
}
