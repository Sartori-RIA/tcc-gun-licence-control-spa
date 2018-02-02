import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PsychologistHomeComponent} from "./psychologist-home/psychologist-home.component";
import {PsychologistEvaluateComponent} from "./psychologist-evaluate/psychologist-evaluate.component";
import {PsychologistProfileComponent} from "./psychologist-profile/psychologist-profile.component";
import {PsychologistReportComponent} from "./psychologist-report/psychologist-report.component";
import {PsychologistAddressComponent} from "./psychologist-address/psychologist-address.component";

const routes: Routes = [
  {
    path: '', component: PsychologistHomeComponent, children: [
      {path: 'avaliacoes', component: PsychologistEvaluateComponent},
      {path: 'perfil', component: PsychologistProfileComponent},
      {path: 'enderecos', component: PsychologistAddressComponent},
      {path: 'relatorios', component: PsychologistReportComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologistRoutingModule {
}
