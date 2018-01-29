import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class AuthDelegateGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkLogin()) {
      let role = sessionStorage.getItem("currentUserRole");
      if (role === 'DELEGADO')
        return true;
      else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
