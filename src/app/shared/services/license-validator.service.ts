import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";
import {RoutesClientUtil} from "../routes-api/routes-client.util";
import {License} from "../model/license";

const url = RoutesClientUtil.VALIDATOR;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable()
export class LicenseValidatorService {

  constructor(private http: HttpClient) {
  }

  validateLicense(model: License): Observable<User> {
    return this.http.post<User>(url, JSON.stringify(model), httpOptions);
  }

}
