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
  @HostBinding('class.menu-opened') menuOpened = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window,
              public authService: AuthService,
              private route: Router,
              protected dataService: DataService) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isFixed = offset > 10;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  onClick() {
    if (this.authService.checkLogin())
      this.authService.logout();
  }

  goToMyProfile() {
    if (this.isCivil())
      this.route.navigate(['/civil/perfil']);
    if (this.isAdmin())
      this.route.navigate(['/admin/perfil']);
    if (this.isDelegate())
      this.route.navigate(['/delegado/perfil']);
    if (this.isExaminator())
      this.route.navigate(['/examinador/perfil']);
  }

  goToMyPage() {
    if (this.isCivil())
      this.route.navigate(['/civil']);
    if (this.isAdmin())
      this.route.navigate(['/admin']);
    if (this.isDelegate())
      this.route.navigate(['/delegado']);
    if (this.isExaminator())
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

  private isDelegate(): boolean {
    return (this.dataService.getUserRole() == 'DELEGADO')

  }

  private isExaminator(): boolean {
    return (this.dataService.getUserRole() == 'PSICOLOGO') || (this.dataService.getUserRole() == 'INSTRUTOR')

  }

  private isAdmin(): boolean {
    return (this.dataService.getUserRole() == 'ADMIN')

  }

}
