import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {UserRole} from "../model/user-role";

export const url = RoutesClientUtil.LVL_ACCESS;

@Injectable()
export class UserCategoryService extends AbstractService<UserRole> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
