import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {RoutesServerUtil} from "../routes-api/routes-server.util";
import {RoutesClientUtil} from "../routes-api/routes-cient.util";
import {Client} from "../model/Client";

@Injectable()
export class ClientService {

  private headers = new Headers({'Content-type': 'application/json'});
  private clientUrl = RoutesServerUtil.URL_API + RoutesClientUtil.CLIENTS;

  constructor(private  http: Http) { }

  save(client: Client): Observable<Client>{
    alert(JSON.stringify(client));
    let headers = new Headers({'Content-type': 'application/json'});
    let option = new RequestOptions({headers: headers});
    return this.http.post(this.clientUrl, JSON.stringify(client), option)
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }

}
