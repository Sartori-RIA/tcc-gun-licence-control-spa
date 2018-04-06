import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Token} from './token';
import {UserService} from '../service/user.service';
import {RoutesClientUtil} from '../util/routes-client.util';
import {User} from '../model/user';
import {DataService} from './data.service';
import {Gender} from "../model/gender";
import {State} from "../model/state";
import {Country} from "../model/country";
import {City} from "../model/city";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private userService: UserService,
              private dataService: DataService) {
  }

  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(RoutesClientUtil.LOGIN_REGISTER_GENDER);
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(RoutesClientUtil.LOGIN_REGISTER_STATE);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(RoutesClientUtil.LOGIN_REGISTER_COUNTRY);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(RoutesClientUtil.LOGIN_REGISTER_CITY);
  }

  makeLogin(model): Observable<Token> {
    return this.http.post<Token>(RoutesClientUtil.LOGIN, JSON.stringify(model))
  }

  getCurrentUser(cpf: string): Observable<User> {
    return this.http.get<User>(`${RoutesClientUtil.USERS}find/property/cpf/value/${cpf}`);
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
