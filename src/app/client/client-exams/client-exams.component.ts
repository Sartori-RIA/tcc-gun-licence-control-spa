import { Component, OnInit } from '@angular/core';
import {Client} from "../../shared/model/Client";
import {ClientService} from "../../shared/services/client.service";

@Component({
  selector: 'app-client-exams',
  templateUrl: './client-exams.component.html',
  styleUrls: ['./client-exams.component.scss']
})
export class ClientExamsComponent implements OnInit {

  models: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.index();
  }

  index(){
    this.clientService.index()
      .subscribe(data => this.models = data);
  }

}
