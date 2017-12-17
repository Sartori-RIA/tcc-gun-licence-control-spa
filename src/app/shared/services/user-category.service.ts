import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {UserRole} from "../model/user-role";

export const url = RoutesServerUtil.URL_API + RoutesClientUtil.LVL_ACCESS;

@Injectable()
export class UserCategoryService extends AbstractService<UserRole> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
