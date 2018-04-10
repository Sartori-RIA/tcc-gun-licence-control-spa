import {Component, HostBinding, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {WINDOW} from '../../shared/helpers/window.helper';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth/auth.service';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed;
  currentUserName: string;

  @HostBinding('class.menu-opened') menuOpened = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window,
              public authService: AuthService,
              private route: Router,
              protected dataService: DataService) {
  }

  ngOnInit() {
    this.currentUserName = this.dataService.getUserName();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isFixed = offset > 10;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  loggout(){
    this.authService.logout();
    this.route.navigate(['/login/entrar']);
  }

  makeLogin() {
    this.route.navigate(['/login/entrar'])
  }

  goToMyProfile() {
    if (this.isCivil())
      this.route.navigate(['/civil/perfil']);
    else if (this.isAdmin())
      this.route.navigate(['/admin/perfil']);
    else if (this.isDelegate())
      this.route.navigate(['/delegado/perfil']);
    else if (this.isExaminator())
      this.route.navigate(['/examinador/perfil']);
  }

  goToMyPage() {
    if (this.isCivil())
      this.route.navigate(['/civil']);
    else if (this.isAdmin())
      this.route.navigate(['/admin']);
    else if (this.isDelegate())
      this.route.navigate(['/delegado']);
    else if (this.isExaminator())
      this.route.navigate(['/examinador/avaliacoes']);
  }

  goToUpdate() {
    this.route.navigate(['/civil/atualizar'])
  }

  goToEvaluate() {
    this.route.navigate(['/examinador/avaliacoes'])
  }

  isCivil(): boolean {
    return (this.dataService.getUserRole() == 'CIVIL')
  }

  isDelegate(): boolean {
    return (this.dataService.getUserRole() == 'DELEGADO')
  }

  isExaminator(): boolean {
    return (this.dataService.getUserRole() == 'PSICOLOGO') || (this.dataService.getUserRole() == 'INSTRUTOR')
  }

  isAdmin(): boolean {
    return (this.dataService.getUserRole() == 'ADMIN')
  }

}
