import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {Licence} from "../model/licence";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.LICENCES_TYPES;

@Injectable()
export class LicenceCategoryService extends AbstractService<Licence> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
