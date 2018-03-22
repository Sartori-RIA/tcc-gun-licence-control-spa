import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {ErrorsHttp} from "../util/errors-http";
import {DialogComponent} from "../component/dialog/dialog.component";

@Injectable()
export class ErrorhandlerInterceptor implements ErrorHandler{


  constructor(private injector: Injector) {
  }

  handleError(error: any): void {
    console.log("MEU INTERCEPTOR DE ERROS")
    console.log(JSON.stringify(error))
  }


/*  verifyErrors(error: any,
               defaultMessage?: string,
               message404?: string,
               message401?: string,
               message500?: string): void {

    let msg404 = message404 != null ? message404 : 'Não foi possivel encontrar com os dados fornecidos.\n\t Por Favor verifique os dados informados';
    let msg401 = message401 != null ? message401 : 'Sinto muito sua sessão expirou.\n\t por favor faça novamente o Login';
    let msg500 = message500 != null ? message500 : 'Erro no servidor, por favor tente mais tarde';

    if (error.status == ErrorsHttp.ERRO_404)
      this.openDialog('Alerta', msg404, 'OK');
    else if (error.status == ErrorsHttp.ERRO_401) {
      this.openDialog('Atenção', msg401, 'OK');
      this.authService.logout();
    }
    else if (error.status == ErrorsHttp.ERRO_500)
      this.openDialog('Erro', msg500, 'OK');
    else
      this.openDialog('Erro', defaultMessage != null ? defaultMessage : JSON.stringify(error), 'OK');
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }*/

}
