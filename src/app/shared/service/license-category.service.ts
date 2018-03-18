import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {LicenseCategory} from '../model/license-category';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.LICENSES_TYPES;

@Injectable()
export class LicenseCategoryService extends AbstractService<LicenseCategory> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
