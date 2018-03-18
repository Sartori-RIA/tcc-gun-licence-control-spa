import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Examinator} from '../model/examinator';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.USERS;

@Injectable()
export class ExaminatorService extends AbstractService<Examinator> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
