import {Injectable} from '@angular/core';
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {AbstractService} from "./abstract.service";
import {Address} from "../model/address";
import {HttpClient} from "@angular/common/http";

const url: string = RoutesClientUtil.ADDRESS;

@Injectable()
export class AddressService extends AbstractService<Address> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
