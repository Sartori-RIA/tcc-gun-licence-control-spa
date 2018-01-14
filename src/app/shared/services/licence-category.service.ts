import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {License} from "../model/license";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.LICENCES_TYPES;

@Injectable()
export class LicenceCategoryService extends AbstractService<License> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
