import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Token} from './token';
import {UserService} from '../service/user.service';
import {RoutesClientUtil} from '../util/routes-client.util';
import {User} from '../model/user';
import {DataService} from './data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

const httpOptionsToken = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable()
export class AuthService {


  constructor(private http: HttpClient,
              private userService: UserService,
              private dataService: DataService) {
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
    this.dataService.clear();
  }

  checkRole(): any {
    this.userService.findByOneProperty('cpf', this.dataService.getUserCPF())
      .subscribe(res => {
        return res.role
      }, () => {
        return null
      })
  }

  checkLogin(): boolean {
    return !this.dataService.isEmpty();
  }

}
