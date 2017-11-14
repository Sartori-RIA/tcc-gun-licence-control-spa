import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientService extends AbstractService {
  private url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

  constructor(http: HttpClient) {
    super(http);
  }

  create(model: any): Observable<any> {
    return super.create(this.url, model);
  }

  index(): Observable<any> {
    return super.index(this.url);
  }

  show(id: any): Observable<any> {
    return super.show(this.url, id);
  }

  edit(model: any): Observable<any> {
    return super.edit(this.url, model);
  }

  destroy(id: any): Observable<any> {
    return super.destroy(this.url, id);
  }
}
