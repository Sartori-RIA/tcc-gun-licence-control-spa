import {Component, OnInit} from "@angular/core";
import {Client} from "../shared/model/client";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  private model: Client = new Client();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  makeLogin(){
    this.authService.makeLogin(this.model)
  }
}
