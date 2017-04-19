import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprovedComponent } from './aproved/aproved.component';
import { DeniedComponent } from './denied/denied.component';
import {ValidatorComponent} from "./validator.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidatorComponent,
    AprovedComponent,
    DeniedComponent
  ],
  bootstrap: [ ValidatorComponent ]
})
export class ValidatorModule { }
