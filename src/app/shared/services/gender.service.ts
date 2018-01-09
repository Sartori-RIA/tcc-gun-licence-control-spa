import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Gender} from "../model/gender";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.SEX;

@Injectable()
export class GenderService extends AbstractService<Gender> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
