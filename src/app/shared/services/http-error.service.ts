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

    if (error.status == ErrorsHttp.ERRO_404)
      this.openDialog("Alerta", message404 != null ? message404 : "Não foi possivel encontrar com os dados fornecidos.\n\t Por Favor verifique os dados informados", "OK");
    else if (error.status == ErrorsHttp.ERRO_401) {
      this.openDialog("Atenção", message401 != null ? message401 : "Sinto muito sua sessão expirou.\n\t por favor faça novamente o Login", "OK");
      this.authService.logout();
    }
    else if (error.status == ErrorsHttp.ERRO_500)
      this.openDialog("Erro", message500 != null ? message500 : "Erro no servidor, por favor tente mais tarde", "OK");
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
