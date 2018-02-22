import {Injectable} from '@angular/core';
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {AbstractService} from "./abstract.service";
import {Requirement} from "../model/requirement";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.REQUIREMENTS;

@Injectable()
export class RequirementService extends AbstractService<Requirement> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
