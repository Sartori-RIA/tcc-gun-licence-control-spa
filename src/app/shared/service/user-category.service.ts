import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {UserRole} from '../model/user-role';
import {RoutesClientUtil} from '../util/routes-client.util';

export const url = RoutesClientUtil.LVL_ACCESS;

@Injectable()
export class UserCategoryService extends AbstractService<UserRole> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
