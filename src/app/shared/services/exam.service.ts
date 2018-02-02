import { Injectable } from '@angular/core';
import {AbstractService} from "./abstract.service";
import {Exam} from "../model/exam";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {HttpClient} from "@angular/common/http";

const url = RoutesClientUtil.EXAMS;

@Injectable()
export class ExamService extends AbstractService<Exam>{


  constructor(http: HttpClient) {
    super(http, url);
  }
}
