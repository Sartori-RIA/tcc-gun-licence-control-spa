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
import {SharedDialogComponent} from "../shared-dialog/shared-dialog.component";
import {MatDialog} from "@angular/material";

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
              private route: Router,
              private dialog: MatDialog) {
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
        this.form.patchValue({
          name: null,
          gender: null,
          password: null,
          email: null,
          cpf: null,
          dateOfBirth: null,
          role: null
        });
        this.openDialog("Sucesso", "Cadastrado com sucesso", "OK")

      }, () => this.openDialog("Erro", "Erro ao Cadastrar Usuario", "OK"));
    } else {
      this.openDialog("Erro", "Alguns campos precisam ser preenchidos", "OK");
      this.formDirty(this.form);
    }
  }

  openDialog(title: string, message: string, confirmBtn: string) {
    let dialog = this.dialog.open(SharedDialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(() => {

    });
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
