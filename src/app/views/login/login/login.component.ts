import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/model/user';
import {AuthService} from '../../../shared/auth/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../../shared/component/dialog/dialog.component';
import {DataService} from '../../../shared/auth/data.service';

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
              private dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.buildReactiveForm();
    this.currentUserName = this.dataService.getUserName();
  }

  onSubmit() {
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    this.authService.makeLogin(this.model).subscribe(
      res => {
        this.dataService.setToken(res.token);
        this.authService.getCurrentUser(this.model.cpf).subscribe(res => {
          this.dataService.setUserCPF(res.cpf);
          this.dataService.setUserName(res.name);
          this.dataService.setUserID(res.id.toString());
          this.dataService.setUserRole(res.role.description);
          if (this.dataService.getUserRole() == 'ADMIN')
            this.router.navigate(['/admin']);
          if (this.dataService.getUserRole() == 'DELEGADO')
            this.router.navigate(['/delegado']);
          if (this.dataService.getUserRole() == 'PSICOLOGO' || this.dataService.getUserRole() == 'INSTRUTOR')
            this.router.navigate(['/examinador']);
          if (this.dataService.getUserRole() == 'CIVIL')
            this.router.navigate(['/civil']);

        })
      }, () => this.openDialog('Erro', 'Usuario ou Senha incorretos', 'OK'));
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
