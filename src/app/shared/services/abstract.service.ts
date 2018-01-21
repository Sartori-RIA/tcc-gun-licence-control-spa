import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
  })
};

@Injectable()
export abstract class AbstractService<T> {


  constructor(private http: HttpClient, private url: string) {
  }

  private static getUrl(url: any, id: any) {
    return url + id;
  }

  create(model: T): Observable<T> {
    return this.http.post<T>(this.url, JSON.stringify(model), httpOptions);
  }

  index(): Observable<T[]> {
    return this.http.get<T[]>(this.url, httpOptions);
  }

  show(id: any): Observable<T> {
    return this.http.get<T>(AbstractService.getUrl(this.url, id), httpOptions);
  }

  findByOneProperty(propert: string, value: string): Observable<T> {
    return this.http.get<T>(this.url + 'find/property/' + propert + '/value/' + value)
  }

  listByOneProperty(propert: string, value: string): Observable<T[]> {
    return this.http.get<T[]>(this.url + 'property/' + propert + '/value/' + value)
  }

  findByTwoProperty(propertOne: string, valueOne: string,
                    propertTwo: string, valueTwo: string): Observable<T> {
    return this.http.get<T>(this.url +
      'find/property/' + propertOne + '/value/' + valueOne +
      '/property/' + propertTwo + '/value/' + valueTwo)
  }

  listByTwoProperty(propertOne: string, valueOne: string,
                    propertTwo: string, valueTwo: string): Observable<T[]> {
    return this.http.get<T[]>(this.url +
      'property/' + propertOne + '/value/' + valueOne +
      '/property/' + propertTwo + '/value/' + valueTwo)
  }

  findByThreeProperty(propertOne: string, valueOne: string,
                      propertTwo: string, valueTwo: string,
                      propertThree: string, valueThree: string): Observable<T> {
    return this.http.get<T>(this.url +
      'find/property/' + propertOne + '/value/' + valueOne +
      '/property/' + propertTwo + '/value/' + valueTwo +
      '/property/' + propertThree + '/value/' + valueThree)

  }

  listByThreeProperty(propertOne: string, valueOne: string,
                      propertTwo: string, valueTwo: string,
                      propertThree: string, valueThree: string): Observable<T[]> {
    return this.http.get<T[]>(this.url +
      'property/' + propertOne + '/value/' + valueOne +
      '/property/' + propertTwo + '/value/' + valueTwo +
      '/property/' + propertThree + '/value/' + valueThree)

  }

  edit(model: any): Observable<any> {
    return this.http.put<any>(AbstractService.getUrl(this.url, model.id), JSON.stringify(model), httpOptions);
  }

  destroy(id: any) {
    return this.http.delete(AbstractService.getUrl(this.url, id), httpOptions).map(res => res);
  }
}
