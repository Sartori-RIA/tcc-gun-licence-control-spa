import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../model/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {CustomValidators} from 'ng2-validation';
import {UserService} from '../../service/user.service';
import {DataService} from '../../auth/data.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserUpdateComponent implements OnInit {

  model: User;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: Router,
              private dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.userService.findByOneProperty('cpf', this.dataService.getUserCPF())
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
      });
    } else Object.keys(this.form.controls).forEach(field => this.form.get(field).markAsDirty());
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }

  private buildForm(): void {
    let pwd = new FormControl('', Validators.required);
    let confirmPwd = new FormControl('', CustomValidators.equalTo(pwd));
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      passwordOld: null,
      passwordNew: pwd,
      passwordConfirm: confirmPwd
    })
  }
}
