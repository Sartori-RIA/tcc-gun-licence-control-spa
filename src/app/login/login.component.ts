import {Component, OnInit} from "@angular/core";
import {User} from "../shared/model/user";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private model: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  makeLogin() {
    this.authService.makeLogin(this.model)
  }
}
