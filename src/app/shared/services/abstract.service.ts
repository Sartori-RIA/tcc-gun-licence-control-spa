import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AbstractService {

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) { }

  create(url: any,model: any): Observable<any>{
    alert(JSON.stringify(model));
    let option = new RequestOptions({headers: this.headers});
    return this.http.post(url, JSON.stringify(model), option)
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }

  index(url: any){
    return this.http.get(url).map(res => res.json());
  }

  show(url: any, id: any){
    return this.http.get(this.getUrl(url, id)).map(res => res.json());
  }

  edit(url: any, client: any){
    return this.http.put(this.getUrl(url, client.id), JSON.stringify(client)).map(res => res.json());
  }

  destroy(url: any, id: any){
    return this.http.delete(this.getUrl(url, id)).map(res => res.json());
  }

  private getUrl(url: any, id: any){
    return url + "/" + id;
  }


  private handleError(error: any): Promise<any> {
    console.error('Um erro aconteceu :(', error);
    return Promise.reject(error.message || error);
  }

}
