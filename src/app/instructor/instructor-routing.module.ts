import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstructorHomeComponent} from "./instructor-home/instructor-home.component";
import {InstructorProfileComponent} from "./instructor-profile/instructor-profile.component";
import {InstructorEvaluateComponent} from "./instructor-evaluate/instructor-evaluate.component";

const routes: Routes = [
  {
    path: '', component: InstructorHomeComponent, children: [
      {path: 'perfil', component: InstructorProfileComponent},
      {path: 'avaliacoes', component: InstructorEvaluateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule {
}
