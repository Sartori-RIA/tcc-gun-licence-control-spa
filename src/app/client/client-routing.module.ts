import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientHomeComponent} from './client-home/client-home.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientLicenceComponent} from './client-licence/client-licence.component';
import {ClientExamsComponent} from './client-exams/client-exams.component';
import {ClientAgendaComponent} from './client-agenda/client-agenda.component';
import {ClientUpdateComponent} from './client-update/client-update.component';
import {ClientLicencesComponent} from "./client-licences/client-licences.component";

const routes: Routes = [
  {
    path: '', component: ClientHomeComponent, children: [
      {path: 'perfil', component: ClientProfileComponent},
      {path: 'licencas', component: ClientLicencesComponent},
      {path: 'nova-licenca', component: ClientLicenceComponent},
      {path: 'exames', component: ClientExamsComponent},
      {path: 'agendamento', component: ClientAgendaComponent},
      {path: 'atualizar', component: ClientUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
