import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export abstract class AbstractService {


  constructor(private http: HttpClient) {
  }

  create(url: string, model: any): Observable<any> {
    alert(JSON.stringify(model));
    return this.http.post(url, JSON.stringify(model), httpOptions)
      .map(res => {
        let body = res;
        return body || {};
      });
  }

  index(url: string) {
    return this.http.get(url).map(res => res);
  }

  show(url: string, id: any) {
    return this.http.get(AbstractService.getUrl(url, id)).map(res => res);
  }

  edit(url: string, model: any) {
    return this.http.put(AbstractService.getUrl(url, model.id), JSON.stringify(model)).map(res => res);
  }

  destroy(url: string, id: any) {
    return this.http.delete(AbstractService.getUrl(url, id)).map(res => res);
  }

  private static getUrl(url: any, id: any) {
    return url + '/' + id;
  }

  private static handleError(error: any): Promise<any> {
    console.error('Um erro aconteceu :(', error);
    return Promise.reject(error.message || error);
  }
}
