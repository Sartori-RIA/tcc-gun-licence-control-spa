import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {AbstractService} from "./abstract.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExamCategoryService extends AbstractService{

  private url = RoutesServerUtil.URL_API + RoutesClientUtil.EXAMS_TYPES;

  constructor(http: Http) {
    super(http);
  }

  index(): Observable<any> {
    return super.index(this.url);
  }
}
