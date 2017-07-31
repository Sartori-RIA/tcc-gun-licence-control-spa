import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ValidatorComponent} from "./validator/validator.component";

const routes: Routes = [
  {path: '', component: ValidatorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorRoutingModule { }
