import { Injectable } from '@angular/core';
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-cient.util";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Examinator} from "../model/examinator";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ExaminatorService {

  private headers = new Headers({'Content-type': 'application/json'});
  private examinatorUrl = RoutesServerUtil.URL_API + RoutesClientUtil.EXAMINATORS;

  constructor(private  http: Http) { }

  create(examinator: Examinator): Observable<Examinator>{
    alert(JSON.stringify(examinator));
    let option = new RequestOptions({headers: this.headers});
    return this.http.post(this.examinatorUrl, JSON.stringify(examinator), option)
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }


  index(){
    return this.http.get(this.examinatorUrl).map(res => res.json());
  }

  show(id){
    return this.http.get(this.getClientUrl(id)).map(res => res.json());
  }

  edit(client){
    return this.http.put(this.getClientUrl(client.id), JSON.stringify(client)).map(res => res.json());
  }

  destroy(id){
    return this.http.delete(this.getClientUrl(id)).map(res => res.json());
  }

  private getClientUrl(id){
    return this.examinatorUrl + "/" + id;
  }


  private handleError(error: any): Promise<any> {
    console.error('Um erro aconteceu :(', error);
    return Promise.reject(error.message || error);
  }


}
