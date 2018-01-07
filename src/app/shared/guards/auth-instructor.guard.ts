import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserRole} from "../model/user-role";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class AuthInstructorGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.checkLogin()) {
      let role = localStorage.getItem("currentUserRole");
      if (role === 'INSTRUTOR')
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
