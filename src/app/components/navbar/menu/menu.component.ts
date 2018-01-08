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

  isCivil(): boolean {
    return localStorage.getItem("currentUserRole") == "CIVIL";
  }

  isDelegate(): boolean {
    return localStorage.getItem("currentUserRole") == "DELEGADO";
  }

  isPsychologist(): boolean {
    return localStorage.getItem("currentUserRole") == "PSICOLOGO";
  }

  isInstructor(): boolean {
    return localStorage.getItem("currentUserRole") == "INSTRUTOR";
  }

  isAdmin(): boolean {
    return localStorage.getItem("currentUserRole") == "ADMIN";
  }

}
