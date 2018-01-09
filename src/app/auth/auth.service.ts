import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoutesClientUtil} from "../shared/routes-api/routes-client.util";
import {Observable} from "rxjs/Observable";
import {Token} from "./token";
import {User} from "../shared/model/user";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

const httpOptionsToken = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
  })
};

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  makeLogin(model): Observable<Token> {
    let url = RoutesClientUtil.LOGIN;
    return this.http.post<Token>(url, JSON.stringify(model), httpOptions)
  }

  getCurrentUser(cpf: string): Observable<User> {
    let url = RoutesClientUtil.CLIENTS + 'find/property/cpf/value/' + cpf;
    console.log(url);
    return this.http.get<User>(url, httpOptionsToken);
  }

  logout() {
    localStorage.clear();
  }

  checkRole(): any {
    let url = RoutesClientUtil.CLIENTS + 'find/property/cpf/value/' + localStorage.getItem("currenUserCPF");
    let user = this.http.get<User>(url, httpOptionsToken);
    user.subscribe(res => {
      return res.role
    }, () => {
      return null
    })
  }

  checkLogin(): boolean {
    return localStorage.getItem("currentUserName") != null
      && localStorage.getItem("currentUserName") != ''
      && localStorage.getItem("token") != null
      && localStorage.getItem("token") != '';
  }

}
