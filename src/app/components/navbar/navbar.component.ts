import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() showMenu;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.showMenu = this.authService.checkLogin();
  }
}