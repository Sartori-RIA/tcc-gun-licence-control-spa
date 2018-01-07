import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  form: FormGroup;
  valid: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildReactiveForm();
  }

  onSubmit() {

  }

  private buildReactiveForm(): void {
    this.form = this.formBuilder.group({
      serial: [null, Validators.required],
    })
  }
}
