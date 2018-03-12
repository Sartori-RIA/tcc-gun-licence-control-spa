import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFixed: boolean;
  @HostBinding("class.menu-opened") menuOpened = false;

  @Input() showMenu;
  currentUserName: string;

  draw: boolean;

  constructor(public authService: AuthService,
              private route: Router) {
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  ngOnInit() {
    this.showMenu = this.authService.checkLogin();
    this.draw = false;
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

  onClick() {
    if (this.authService.checkLogin())
      this.authService.logout();
  }

  drawerMenu() {
    this.draw = !this.draw;
  }

  goToMyProfile() {
    if (this.isCivil())
      this.route.navigate(['/civil/perfil']);
    if (this.isAdmin())
      this.route.navigate(['/admin/perfil']);
    if (this.isDelegate())
      this.route.navigate(['/delegado/perfil']);
    if (this.isPsychologist())
      this.route.navigate(['/psicologo/perfil']);
    if (this.isInstructor())
      this.route.navigate(['/instrutor/perfil']);
  }

  goToMyPage() {
    if (this.isCivil())
      this.route.navigate(['/civil']);
    if (this.isAdmin())
      this.route.navigate(['/admin']);
    if (this.isDelegate())
      this.route.navigate(['/delegado']);
    if (this.isPsychologist())
      this.route.navigate(['/psicologo']);
    if (this.isInstructor())
      this.route.navigate(['/instrutor']);
  }

  goToUpdate() {
    this.route.navigate(['/civil/atualizar'])
  }

  isCivil(): boolean {
    return (sessionStorage.getItem("currentUserRole") == "CIVIL")

  }

  private isDelegate(): boolean {
    return (sessionStorage.getItem("currentUserRole") == "DELEGADO")

  }

  private isPsychologist(): boolean {
    return (sessionStorage.getItem("currentUserRole") == "PSICOLOGO")

  }

  private isInstructor(): boolean {
    return (sessionStorage.getItem("currentUserRole") == "INSTRUTOR")

  }

  private isAdmin(): boolean {
    return (sessionStorage.getItem("currentUserRole") == "ADMIN")

  }
}
