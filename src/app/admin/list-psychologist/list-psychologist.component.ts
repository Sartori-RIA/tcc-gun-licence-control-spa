import { Component, OnInit } from '@angular/core';
import {ExaminatorService} from "../../shared/services/examinator.service";
import {Examinator} from "../../shared/model/examinator";

@Component({
  selector: 'app-list-psychologist',
  templateUrl: './list-psychologist.component.html',
  styleUrls: ['./list-psychologist.component.scss']
})
export class ListPsychologistComponent implements OnInit {

  models: Examinator[];

  constructor(private examinatorService: ExaminatorService) { }

  ngOnInit() {
    this.index();
  }

  index(){
    this.examinatorService.index()
      .subscribe(data => this.models = data);
  }

}
