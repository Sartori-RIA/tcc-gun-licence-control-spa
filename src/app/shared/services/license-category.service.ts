import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {License} from "../model/license";
import {HttpClient} from "@angular/common/http";
import {LicenseCategory} from "../model/license-category";

const url = RoutesClientUtil.LICENSES_TYPES;

@Injectable()
export class LicenseCategoryService extends AbstractService<LicenseCategory> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
