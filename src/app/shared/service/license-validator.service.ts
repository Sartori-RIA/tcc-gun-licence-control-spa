import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {License} from '../model/license';
import {RoutesClientUtil} from '../util/routes-client.util';

const url = RoutesClientUtil.VALIDATOR;

@Injectable()
export class LicenseValidatorService {

  constructor(private http: HttpClient) {
  }

  validateLicense(model: License): Observable<User> {
    return this.http.post<User>(url, JSON.stringify(model));
  }

}
