import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {ExamCategory} from '../model/exam-category';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.EXAMS_TYPES;

@Injectable()
export class ExamCategoryService extends AbstractService<ExamCategory> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
