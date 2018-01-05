import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoutesClientUtil} from "../shared/routes-api/routes-client.util";
import {Observable} from "rxjs/Observable";
import {Token} from "./token";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
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

}
