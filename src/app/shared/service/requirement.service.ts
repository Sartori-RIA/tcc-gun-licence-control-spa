import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Requirement} from '../model/requirement';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.REQUIREMENTS;

@Injectable()
export class RequirementService extends AbstractService<Requirement> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
