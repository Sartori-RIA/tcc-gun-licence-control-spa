import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export abstract class AbstractService<T> {


  constructor(private http: HttpClient, private url: string) {
  }

  private static getUrl(url: any, id: any) {
    return url + id;
  }

  save(model: T): Observable<T> {
    return this.http.post<T>(this.url, JSON.stringify(model));
  }

  index(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(AbstractService.getUrl(this.url, id));
  }

  update(model: any): Observable<any> {
    return this.http.put<any>(this.url, JSON.stringify(model));
  }

  destroy(id: any) {
    return this.http.delete(AbstractService.getUrl(this.url, id));
  }

  findByOneProperty(propert: string, value: string): Observable<T> {
    return this.http.get<T>(`${this.url}find/property/${propert}/value/${value}`)
  }

  listByOneProperty(propert: string, value: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}property/${propert}/value/${value}`)
  }

  findByTwoProperty(propertOne: string, valueOne: string,
                    propertTwo: string, valueTwo: string): Observable<T> {
    return this.http.get<T>(`${this.url}find/property/${propertOne}/value/${valueOne}/property/${propertTwo}/value/${valueTwo}`)
  }

  listByTwoProperty(propertOne: string, valueOne: string,
                    propertTwo: string, valueTwo: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}property/${propertOne}/value/${valueOne}/property/${propertTwo}/value/${valueTwo}`)
  }

  findByThreeProperty(propertOne: string, valueOne: string,
                      propertTwo: string, valueTwo: string,
                      propertThree: string, valueThree: string): Observable<T> {
    return this.http.get<T>(`${this.url}find/property/${propertOne}/value/${valueOne}/property/${propertTwo} /value/${valueTwo}/property/${propertThree}/value/${valueThree}`)
  }

  listByThreeProperty(propertOne: string, valueOne: string,
                      propertTwo: string, valueTwo: string,
                      propertThree: string, valueThree: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}property/${propertOne}/value/${valueOne}/property/${propertTwo}/value/${valueTwo}/property/${propertThree}/value/${valueThree}`)

  }
}
