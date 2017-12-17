import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

const url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

@Injectable()
export class ClientService extends AbstractService<User> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
