import {Injectable} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ErrorsHttp} from "../util/errors-http";
import {SharedDialogComponent} from "../components/shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";

@Injectable()
export class HttpErrorService {

  constructor(private authService: AuthService,
              private dialog: MatDialog) {
  }

  verifyErrors(error: any,
               defaultMessage?: string,
               message404?: string,
               message401?: string,
               message500?: string): void {

    console.log(JSON.stringify(error));

    let msg404 = message404 != null ? message404 : "Não foi possivel encontrar com os dados fornecidos.\n\t Por Favor verifique os dados informados";
    let msg401 = message401 != null ? message401 : "Sinto muito sua sessão expirou.\n\t por favor faça novamente o Login";
    let msg500 = message500 != null ? message500 : "Erro no servidor, por favor tente mais tarde";

    if (error.status == ErrorsHttp.ERRO_404)
      this.openDialog("Alerta", msg404, "OK");
    else if (error.status == ErrorsHttp.ERRO_401) {
      this.openDialog("Atenção", msg401, "OK");
      this.authService.logout();
    }
    else if (error.status == ErrorsHttp.ERRO_500)
      this.openDialog("Erro", msg500, "OK");
    else
      this.openDialog("Erro", defaultMessage != null ? defaultMessage : JSON.stringify(error), "OK");
  }

  private openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
}
