import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-psychologist-evaluate',
  templateUrl: './psychologist-evaluate.component.html',
  styleUrls: ['./psychologist-evaluate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologistEvaluateComponent implements OnInit {

  form: FormGroup;
  model: User;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.required]
    });
  }

  searchByCPF(){
    this.userService.findByOneProperty("cpf",this.form.value.cpf).subscribe( res =>{
      console.log(JSON.stringify(res));
      this.model = res;
    });
  }

}
