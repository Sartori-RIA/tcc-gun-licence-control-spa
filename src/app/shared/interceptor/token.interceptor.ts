import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {DataService} from '../auth/data.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private dataService: DataService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.dataService.getToken();
    let headers = req.headers.set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');

    const cloneReq = req.clone({headers});

    return next.handle(cloneReq);
  }

}
