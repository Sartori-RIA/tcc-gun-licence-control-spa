import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstructorHomeComponent} from "./instructor-home/instructor-home.component";
import {InstructorProfileComponent} from "./instructor-profile/instructor-profile.component";

const routes: Routes = [
  {
    path: '', component: InstructorHomeComponent, children: [
      {path: 'perfil', component: InstructorProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule {
}
