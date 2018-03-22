import {ErrorHandler, Injectable, Injector} from '@angular/core';

@Injectable()
export class ErrorhandlerInterceptor implements ErrorHandler{


  constructor(private injector: Injector) {
  }

  handleError(error: any): void {
    console.log("MEU INTERCEPTOR DE ERROS")
    console.log(JSON.stringify(error))
  }

}
