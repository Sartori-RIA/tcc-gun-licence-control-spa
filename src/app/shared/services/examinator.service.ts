import {Injectable} from '@angular/core';
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {Http} from "@angular/http";
import {AbstractService} from "./abstract.service";

@Injectable()
export class ExaminatorService extends AbstractService {

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

  constructor(http: Http) {
    super(http);
  }

}
