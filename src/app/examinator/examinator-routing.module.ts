import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {EvaluateComponent} from "./evaluate/evaluate.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listagem', component: ListComponent},
  { path: 'avaliar', component: EvaluateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminatorRoutingModule { }
