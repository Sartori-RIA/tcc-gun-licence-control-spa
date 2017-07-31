import { Component, OnInit } from '@angular/core';
import {Client} from "../../shared/model/client";
import {ClientService} from "../../shared/services/client.service";


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  errorMessage: string;
  model: Client = new Client();

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

}
