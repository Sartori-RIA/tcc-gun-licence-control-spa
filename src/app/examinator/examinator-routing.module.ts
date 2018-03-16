import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExaminatorHomeComponent} from "./examinator-home/examinator-home.component";
import {ExaminatorProfileComponent} from "./examinator-profile/examinator-profile.component";
import {ExaminatorEvaluateComponent} from "./examinator-evaluate/examinator-evaluate.component";

const routes: Routes = [
  {
    path: '', component: ExaminatorHomeComponent, children: [
      {path: 'perfil', component: ExaminatorProfileComponent},
      {path: 'avaliacoes', component: ExaminatorEvaluateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminatorRoutingModule {
}
