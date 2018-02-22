import {Injectable} from '@angular/core';
import {RoutesClientUtil} from '../routes-api/routes-client.util';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {ExamCategory} from "../model/exam-category";

const url = RoutesClientUtil.EXAMS_TYPES;

@Injectable()
export class ExamCategoryService extends AbstractService<ExamCategory> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
