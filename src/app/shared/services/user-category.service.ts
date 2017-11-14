import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserCategoryService extends AbstractService {

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.LVL_ACCESS;

  constructor(http: HttpClient) {
    super(http);
  }

  index(): Observable<any> {
    return super.index(this.url);
  }
}
