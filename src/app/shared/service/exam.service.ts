import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {Exam} from '../model/exam';
import {HttpClient} from '@angular/common/http';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.EXAMS;

@Injectable()
export class ExamService extends AbstractService<Exam> {


  constructor(http: HttpClient) {
    super(http, url);
  }
}
