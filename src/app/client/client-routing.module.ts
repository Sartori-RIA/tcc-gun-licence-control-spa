import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientHomeComponent} from "./client-home/client-home.component";
import {ClientProfileComponent} from "./client-profile/client-profile.component";
import {ClientLicenceComponent} from "./client-licence/client-licence.component";
import {ClientExamsComponent} from "./client-exams/client-exams.component";
import {ClientAgendaComponent} from "./client-agenda/client-agenda.component";

const routes: Routes = [
  {
    path: '', component: ClientHomeComponent, children: [
      {path: 'perfil', component: ClientProfileComponent},
      {path: 'licencas', component: ClientLicenceComponent},
      {path: 'exames', component: ClientExamsComponent},
      {path: 'agendamento', component: ClientAgendaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
