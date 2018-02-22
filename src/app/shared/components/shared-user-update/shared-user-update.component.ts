import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedDialogComponent} from "../shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";
import {HttpErrorService} from "../../services/http-error.service";

@Component({
  selector: 'app-shared-user-update',
  templateUrl: './shared-user-update.component.html',
  styleUrls: ['./shared-user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedUserUpdateComponent implements OnInit {

  model: User;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: Router,
              private dialog: MatDialog,
              private httpErrorService: HttpErrorService) {
  }

  ngOnInit() {
    this.userService.findByOneProperty("cpf", sessionStorage.getItem("currentUserCPF"))
      .subscribe(res => {
        this.model = res;
        this.form.patchValue({
          email: res.email
        })
      });
    this.buildForm();
  }

  updateUser() {
    if (this.form.valid) {
      if (this.form.value.password != null)
        this.model.password = this.form.value.password;
      this.model.email = this.form.value.email;
      this.userService.update(this.model).subscribe(res => {
        this.route.navigate(['/civil/perfil'])
      }, error2 => this.httpErrorService.verifyErrors(error2, "Sinto muito ocorreu um erro ao atualizar os dados"));
    } else Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      passwordOld: [null],
      passwordNew: [null],
      passwordConfirm: [null]
    })
  }
}
