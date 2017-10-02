import {EventEmitter, Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {User} from "../shared/model/user";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  private autenticado: boolean = false;

  showMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  makeLogin(model: User) {
    if (model.cpf == '123' && model.password == '123') {
      this.autenticado = true;
      this.showMenu.emit(true);
      this.router.navigate(['/'])
    } else {
      alert("ERROOU");
      console.log(model)
    }
  }

  usuarioEstaAutenticado() {
    return this.autenticado;
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
