import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("token");
    const cloneRequest = this.cloneRequest(req, token);
    return next.handle(cloneRequest);
  }

  private cloneRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {'Content-type': 'application/json', 'Authorization': `Bearer ${token}`}
    });
  }
}
