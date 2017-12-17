import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Sex} from "../model/sex";
import {HttpClient} from "@angular/common/http";

const url = RoutesServerUtil.URL_API + RoutesClientUtil.SEX;

@Injectable()
export class SexService extends AbstractService<Sex> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
