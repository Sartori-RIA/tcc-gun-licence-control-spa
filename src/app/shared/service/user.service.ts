import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Address} from '../model/address';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.USERS;

@Injectable()
export class UserService extends AbstractService<User> {

  constructor(http: HttpClient, private http1: HttpClient) {
    super(http, url);
  }

  register(model: User): Observable<User> {
    return this.http1.post(`${RoutesClientUtil.REGISTER}`, JSON.stringify(model))
  }

  saveAddress(address: Address): Observable<User> {
    return this.http1.post(`${url}add-addressList/`, JSON.stringify(address))
  }
}
