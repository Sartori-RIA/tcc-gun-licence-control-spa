import {Injectable} from '@angular/core';
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {Http} from "@angular/http";
import {AbstractService} from "./abstract.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SexService extends AbstractService {

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.SEX;

  constructor(http: Http) {
    super(http);
  }

  index(): Observable<any> {
    return super.index(this.url);
  }
}
