import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {DataService} from '../auth/data.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private dataService: DataService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.dataService.getToken();
    const cloneRequest = this.cloneRequest(req, token);
    return next.handle(cloneRequest);
  }

  private cloneRequest(request: HttpRequest<any>, token: string) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    request.clone({headers});

    console.log(JSON.stringify(request));
    return request;
  }
}
