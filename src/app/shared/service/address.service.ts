import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Address} from '../model/address';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url: string = RoutesClientUtil.ADDRESS;

@Injectable()
export class AddressService extends AbstractService<Address> {

  constructor(http: HttpClient) {
    super(http, url);
  }
}
