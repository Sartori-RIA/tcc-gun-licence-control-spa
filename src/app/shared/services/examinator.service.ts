import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {Http} from '@angular/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ExaminatorService extends AbstractService {

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

  constructor(http: HttpClient) {
    super(http);
  }


  create(model: any): Observable<any> {
    return super.create(this.url, model);
  }
}
