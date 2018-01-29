import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoutesClientUtil} from "../shared/routes-api/routes-client.util";
import {Observable} from "rxjs/Observable";
import {Token} from "./token";
import {User} from "../shared/model/user";
import {UserService} from "../shared/services/user.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

const httpOptionsToken = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
  })
};

@Injectable()
export class AuthService {


  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  makeLogin(model): Observable<Token> {
    let url = RoutesClientUtil.LOGIN;
    return this.http.post<Token>(url, JSON.stringify(model), httpOptions)
  }

  getCurrentUser(cpf: string): Observable<User> {
    let url = RoutesClientUtil.USERS + 'find/property/cpf/value/' + cpf;
    return this.http.get<User>(url, httpOptionsToken);
  }

  logout() {
    sessionStorage.clear();
  }

  checkRole(): any {
    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => {
        return res.role
      }, () => {
        return null
      })
  }

  checkLogin(): boolean {
    return sessionStorage.getItem("currentUserName") != null
      && sessionStorage.getItem("currentUserName") != ''
      && sessionStorage.getItem("currentUserCPF") != null
      && sessionStorage.getItem("currentUserCPF") != ''
      && sessionStorage.getItem("token") != null
      && sessionStorage.getItem("token") != '';
  }

}
