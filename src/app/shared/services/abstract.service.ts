import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class AbstractService {

  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) {
  }

  create(url: string, model: any): Observable<any> {
    alert(JSON.stringify(model));
    let option = new RequestOptions({headers: this.headers});
    return this.http.post(url, JSON.stringify(model), option)
      .map(res => {
        let body = res.json();
        return body || {};
      });
  }

  index(url: string) {
    return this.http.get(url).map(res => res.json());
  }

  show(url: string, id: any) {
    return this.http.get(AbstractService.getUrl(url, id)).map(res => res.json());
  }

  edit(url: string, model: any) {
    return this.http.put(AbstractService.getUrl(url, model.id), JSON.stringify(model)).map(res => res.json());
  }

  destroy(url: string, id: any) {
    return this.http.delete(AbstractService.getUrl(url, id)).map(res => res.json());
  }

  private static getUrl(url: any, id: any) {
    return url + "/" + id;
  }

  private static handleError(error: any): Promise<any> {
    console.error('Um erro aconteceu :(', error);
    return Promise.reject(error.message || error);
  }
}
