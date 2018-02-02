import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Gender} from "../../model/gender";
import {Cep} from "../../model/cep";
import {User} from "../../model/user";
import {UserRole} from "../../model/user-role";
import {GenderService} from "../../services/gender.service";
import {UserCategoryService} from "../../services/user-category.service";
import {FormCanDeactivate} from "../../model/form-can-deactivate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./form.component.scss']
})
export class SharedFormComponent implements OnInit, FormCanDeactivate {

  @Input() isClient: boolean = false;
  model: User = new User();
  cep: Cep = new Cep();
  genders: Gender[] = [];
  roles: UserRole[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private genderService: GenderService,
              private userCategoryService: UserCategoryService,
              private route: Router) {
  }

  canDesactive() {
  }

  ngOnInit() {
    this.genderService.index().subscribe(res => this.genders = res);
    this.userCategoryService.index().subscribe(res => this.roles = res);
    this.buildReactiveForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.converFormBuilderToModel();
        this.userService.save(this.model).subscribe(() => {
          if (this.isClient)
            this.route.navigate(['/login']);
          else window.location.reload();
        });
    } else this.formDirty(this.form);
  }


  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      role: [null]
    });
  }

  private converFormBuilderToModel(): void {
    this.model.name = this.form.value.name;
    this.model.gender = this.form.value.gender;
    this.model.dateOfBirth = this.form.value.dateOfBirth;
    this.model.cpf = this.form.value.cpf;
    this.model.password = this.form.value.password;
    this.model.email = this.form.value.email;
    this.model.role = this.form.value.role;
  }

  private formDirty(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => form.get(field).markAsDirty());
  }

}
