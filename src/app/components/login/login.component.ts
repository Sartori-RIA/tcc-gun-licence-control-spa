import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/model/user";
import {AuthService} from "../../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DialogComponent} from "../../shared/components/dialog/dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  currentUserName: string;
  private model: User = new User();

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.buildReactiveForm();
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

  onSubmit() {
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    this.authService.makeLogin(this.model).subscribe(
      res => {
        sessionStorage.setItem("token", res.token);
        this.authService.getCurrentUser(this.model.cpf).subscribe(res => {
          sessionStorage.setItem("currentUserName", res.name);
          sessionStorage.setItem("currentUserID", res.id.toString());
          sessionStorage.setItem("currentUserCPF", res.cpf);
          sessionStorage.setItem("currentUserRole", res.role.description);
          if (res.role.description == "ADMIN")
            this.router.navigate(['/admin']);
          if (res.role.description == "DELEGADO")
            this.router.navigate(['/delegado']);
          if (res.role.description == "PSICOLOGO" || res.role.description == "INSTRUTOR")
            this.router.navigate(['/examinador']);
          if (res.role.description == "CIVIL")
            this.router.navigate(['/civil']);

        })
      }, () => this.openDialog("Erro", "Usuario ou Senha incorretos", "OK"));
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, Validators.required],
    })
  }
}
