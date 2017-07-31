import { Injectable } from '@angular/core';
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AbstractService} from "./abstract.service";

@Injectable()
export class ExaminatorService extends AbstractService{

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

  constructor(http: Http) {
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

  edit(client: any): Observable<any> {
    return super.edit(this.url, client);
  }

  destroy(id: any): Observable<any> {
    return super.destroy(this.url, id);
  }
}
