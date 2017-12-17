import {Injectable} from '@angular/core';
import {RoutesServerUtil} from '../routes-api/routes-server.util';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Exam} from "../model/exam";

const url = RoutesServerUtil.URL_API + RoutesClientUtil.EXAMS_TYPES;

@Injectable()
export class ExamCategoryService extends AbstractService<Exam> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
