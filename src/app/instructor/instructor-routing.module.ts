import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstructorHomeComponent} from "./instructor-home/instructor-home.component";
import {InstructorProfileComponent} from "./instructor-profile/instructor-profile.component";
import {InstructorAddressComponent} from "./instructor-address/instructor-address.component";
import {InstructorEvaluateComponent} from "./instructor-evaluate/instructor-evaluate.component";
import {InstructorReportComponent} from "./instructor-report/instructor-report.component";

const routes: Routes = [
  {
    path: '', component: InstructorHomeComponent, children: [
      {path: 'perfil', component: InstructorProfileComponent},
      {path: 'enderecos', component: InstructorAddressComponent},
      {path: 'avaliacoes', component: InstructorEvaluateComponent},
      {path: 'relatorios', component: InstructorReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule {
}
