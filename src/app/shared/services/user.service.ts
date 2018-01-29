import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {User} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Address} from "../model/address";

const url = RoutesClientUtil.USERS;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem("token")
  })
};

@Injectable()
export class UserService extends AbstractService<User> {

  constructor(http: HttpClient, private http1: HttpClient) {
    super(http, url);
  }

  saveAddress(address: Address): Observable<User> {
    return this.http1.post(url + 'add-addressList/', JSON.stringify(address), httpOptions)
  }
}
