import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Gender} from '../model/gender';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.SEX;

@Injectable()
export class GenderService extends AbstractService<Gender> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
