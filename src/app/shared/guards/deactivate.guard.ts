import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {FormCanDeactivate} from "../model/form-can-deactivate";

@Injectable()
export class DeactivateGuard implements CanDeactivate<FormCanDeactivate> {


  canDeactivate(component: FormCanDeactivate, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("desativacao");

    return component.canDesactive();
  }
}
