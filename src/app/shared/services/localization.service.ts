import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class LocalizationService {

  constructor(private http: Http) { }

  getStatesBR(){
    return this.http.get('assets/json/statesBR.json').map((res: Response) => res.json());
  }

}
