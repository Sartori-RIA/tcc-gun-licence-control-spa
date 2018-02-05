import {Injectable} from '@angular/core';
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {AbstractService} from "./abstract.service";
import {License} from "../model/license";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.LICENSES;

@Injectable()
export class LicenseService extends AbstractService<License> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
