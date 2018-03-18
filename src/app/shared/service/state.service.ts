import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {State} from '../model/state';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url: string = RoutesClientUtil.STATES;

@Injectable()
export class StateService extends AbstractService<State> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
