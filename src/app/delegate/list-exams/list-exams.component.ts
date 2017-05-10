import { Component, OnInit } from '@angular/core';
import {Client} from "../../shared/model/Client";
import {ClientService} from "../../shared/services/client.service";

@Component({
  selector: 'app-list-exams',
  templateUrl: './list-exams.component.html',
  styleUrls: ['./list-exams.component.scss']
})
export class ListExamsComponent implements OnInit {

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
