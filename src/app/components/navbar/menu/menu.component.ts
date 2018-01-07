import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() showMenu;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  onClick() {
    if (this.authService.checkLogin())
      this.authService.logout();
  }

}
