import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {Http} from '@angular/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LicenceCategoryService extends AbstractService {

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.LICENCES_TYPES;

  constructor(http: HttpClient) {
    super(http);
  }

  index(): Observable<any> {
    return super.index(this.url);
  }
}
