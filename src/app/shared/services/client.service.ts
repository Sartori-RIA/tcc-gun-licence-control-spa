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

  create(client: Client): Observable<Client>{
    alert(JSON.stringify(client));
    let option = new RequestOptions({headers: this.headers});
    return this.http.post(this.clientUrl, JSON.stringify(client), option)
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }


  index(){
    return this.http.get(this.clientUrl).map(res => res.json());
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
    return this.clientUrl + "/" + id;
  }


  private handleError(error: any): Promise<any> {
    console.error('Um erro aconteceu :(', error);
    return Promise.reject(error.message || error);
  }


}
