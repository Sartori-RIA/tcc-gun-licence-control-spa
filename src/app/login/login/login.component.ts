import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Client} from "../../shared/model/client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Client = new Client();

  constructor() { }

  ngOnInit() {
  }

  makeLogin(){

  }
}
