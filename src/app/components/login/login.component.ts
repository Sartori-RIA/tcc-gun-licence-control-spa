import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/model/user";
import {AuthService} from "../../auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
              private router: Router) {
  }

  ngOnInit() {
    this.buildReactiveForm();
    this.currentUserName = localStorage.getItem("currentUserName");
  }

  onSubmit() {
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    this.authService.makeLogin(this.model).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this.authService.getCurrentUser(this.model.cpf).subscribe(res => {
          localStorage.setItem("currentUserName", res.name);
          localStorage.setItem("currentUserID", res.id.toString());
          localStorage.setItem("currentUserCPF", res.cpf);
          localStorage.setItem("currentUserRole", res.role.description);
          if(res.role.description == "ADMIN")
            this.router.navigate(['/admin']);
          if (res.role.description == "DELEGADO")
            this.router.navigate(['/delegado']);
          if(res.role.description == "INSTRUTOR")
            this.router.navigate(['/instrutor']);
          if(res.role.description == "PSICOLOGO")
            this.router.navigate(['/psicologo']);
          if(res.role.description == "CIVIL")
            this.router.navigate(['/civil']);

        })
      }, error => console.log("ERRRRROR =>" + JSON.stringify(error))
    )
  }


  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, Validators.required],
    })
  }
}
