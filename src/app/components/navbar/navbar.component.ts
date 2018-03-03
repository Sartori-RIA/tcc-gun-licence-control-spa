import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() showMenu;

  draw: boolean;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.showMenu = this.authService.checkLogin();
    this.draw = false;
  }

  onClick() {
    if (this.authService.checkLogin())
      this.authService.logout();
  }

  drawerMenu(){
    this.draw = !this.draw;
  }

  isCivil(): boolean {
    return sessionStorage.getItem("currentUserRole") == "CIVIL";
  }

  isDelegate(): boolean {
    return sessionStorage.getItem("currentUserRole") == "DELEGADO";
  }

  isPsychologist(): boolean {
    return sessionStorage.getItem("currentUserRole") == "PSICOLOGO";
  }

  isInstructor(): boolean {
    return sessionStorage.getItem("currentUserRole") == "INSTRUTOR";
  }

  isAdmin(): boolean {
    return sessionStorage.getItem("currentUserRole") == "ADMIN";
  }
}
