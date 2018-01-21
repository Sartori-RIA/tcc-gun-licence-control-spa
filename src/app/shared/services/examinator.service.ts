import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Examinator} from "../model/examinator";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.USERS;

@Injectable()
export class ExaminatorService extends AbstractService<Examinator> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
