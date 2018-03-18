import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    const cloneRequest = this.cloneRequest(req, token);
    return next.handle(cloneRequest);
  }

  private cloneRequest(request: HttpRequest<any>, token: string) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer dsads ${token}`,
      'Content-Type': 'application/json'
    });

    request.clone({headers});
    /*request.clone({
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    });*/

    console.log(JSON.stringify(request));
    return request;
  }
}
