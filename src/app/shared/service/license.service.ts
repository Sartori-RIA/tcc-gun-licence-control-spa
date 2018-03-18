import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {License} from '../model/license';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.LICENSES;

@Injectable()
export class LicenseService extends AbstractService<License> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
