import {Injectable} from '@angular/core';
import {AbstractService} from "./abstract.service";
import {Country} from "../model/country";
import {HttpClient} from "@angular/common/http";
import {RoutesClientUtil} from "../routes-api/routes-client.util";

const url: string = RoutesClientUtil.COUNTRIES;

@Injectable()
export class CountryService extends AbstractService<Country> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
