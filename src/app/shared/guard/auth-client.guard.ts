import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';
import {DataService} from '../auth/data.service';

@Injectable()
export class AuthClientGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private dataService: DataService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkLogin()) {
      let role = this.dataService.getUserRole();
      if (role === 'CIVIL')
        return true;
      else {
        this.router.navigate(['/login/entrar']);
        return false;
      }
    }

    else {
      this.router.navigate(['/login/entrar']);
      return false;
    }
  }
}
