import {Component, OnInit} from "@angular/core";
import {User} from "../shared/model/user";
import {AuthService} from "../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildResctiveForm();
    this.currentUserName = localStorage.getItem("currentUserName");
  }

  onSubmit() {
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    console.log(this.model);
    this.authService.makeLogin(this.model).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.authService.getCurrentUser(this.model.cpf).subscribe(res => {
          localStorage.setItem("currentUserName", res.name);
          localStorage.setItem("currentUserID", res.id.toString());
        })
      }, error => console.log("ERRRRROR =>" + JSON.stringify(error))
    )
  }


  private buildResctiveForm(): void {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, Validators.required],
    })
  }
}
