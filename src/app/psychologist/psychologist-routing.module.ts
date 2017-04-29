import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PsychologistHomeComponent} from "./psychologist-home/psychologist-home.component";

const routes: Routes = [
  { path: '', component: PsychologistHomeComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistRoutingModule { }
