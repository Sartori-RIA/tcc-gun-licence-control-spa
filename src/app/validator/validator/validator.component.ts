import { Component, OnInit } from '@angular/core';
import {Licence} from "../../shared/model/licence";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  private model: Licence = new Licence();
  private isValid: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.model.serial = "123")
      return this.isValid = true;
    return this.isValid = false;
  }
}
