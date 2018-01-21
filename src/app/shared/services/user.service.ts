import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.USERS;

@Injectable()
export class UserService extends AbstractService<User> {


  constructor(http: HttpClient) {
    super(http, url);
  }

}
