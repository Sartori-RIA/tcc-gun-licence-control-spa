import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export abstract class AbstractService<T> {


  constructor(private http: HttpClient, private url: string) {
  }

  create(model: T): Observable<T> {
    alert(JSON.stringify(model));
    return this.http.post<T>(this.url, JSON.stringify(model), httpOptions);
  }

  index(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  show(id: any): Observable<T> {
    return this.http.get<T>(AbstractService.getUrl(this.url, id));
  }

  edit(model: any): Observable<any> {
    return this.http.put<any>(AbstractService.getUrl(this.url, model.id), JSON.stringify(model));
  }

  destroy(id: any) {
    return this.http.delete(AbstractService.getUrl(this.url, id)).map(res => res);
  }

  private static getUrl(url: any, id: any) {
    return url + '/' + id;
  }
}
