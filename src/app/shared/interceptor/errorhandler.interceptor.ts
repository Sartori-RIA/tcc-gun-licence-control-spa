import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {DialogComponent} from "../component/dialog/dialog.component";
import {AuthService} from "../auth/auth.service";
import {MatDialog} from "@angular/material";

@Injectable()
export class ErrorhandlerInterceptor implements ErrorHandler {


  constructor(private injector: Injector,
              private authService: AuthService,) {
  }

  handleError(error: any): void {
    this.verifyErrors(error)
  }


  verifyErrors(error: any): void {

    let dialogComponent = this.injector.get(MatDialog);
    let msg404 = 'Não foi possivel encontrar com os dados fornecidos.\n\t Por Favor verifique os dados informados';
    let msg401 = 'Sinto muito sua sessão expirou.\n\t por favor faça novamente o Login';
    let msg500 = 'Erro no servidor, por favor tente mais tarde';
    let msg400 = 'Você não possui permissão para esta ação';

    if (error.status == 400) {
      this.openDialog('Atenção', msg400, 'OK', dialogComponent);
    }
    else if (error.status == 401) {
      this.openDialog('Atenção', msg401, 'OK', dialogComponent);
      this.authService.logout();
    }
    else if (error.status == 404) {
      this.openDialog('Alerta', msg404, 'OK', dialogComponent);
    }
    else if (error.status == 500 || error.status == 503) {
      this.openDialog('Erro', msg500, 'OK', dialogComponent);
    }
    else {
      console.log(error)
    }
  }

  private openDialog(title: string, message: string, confirmBtn: string, dialogCp: MatDialog) {
    let dialog = dialogCp.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
}
