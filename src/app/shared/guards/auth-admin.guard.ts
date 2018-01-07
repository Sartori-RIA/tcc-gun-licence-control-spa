import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../../auth/auth.service";
import {UserRole} from "../model/user-role";

@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkLogin()) {
      let role = localStorage.getItem("currentUserRole");
      if (role === 'ADMIN')
        return true;
      else{
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
