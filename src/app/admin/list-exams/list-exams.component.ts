import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../shared/services/client.service";
import {Client} from "../../shared/model/Client";

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
