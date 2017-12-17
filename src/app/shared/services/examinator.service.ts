import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Examinator} from "../model/examinator";
import {HttpClient} from "@angular/common/http";

const url = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

@Injectable()
export class ExaminatorService extends AbstractService<Examinator> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
