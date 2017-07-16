/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientExamsComponent } from './client-exams/client-exams.component';
import { ClientLicenceComponent } from './client-licence/client-licence.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import {ClientAgendaComponent} from "./client-agenda/client-agenda.component";

const clientsRoutes: Routes = [
  { path: '', component: ClientHomeComponent, children : [
    { path: 'perfil', component: ClientProfileComponent},
    { path: 'licencas', component: ClientLicenceComponent},
    { path: 'exames', component: ClientExamsComponent},
    { path: 'novo', component: ClientRegisterComponent},
    { path: 'agendamento', component: ClientAgendaComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(clientsRoutes)],
  exports: [ RouterModule]
})
export class ClientRoutingModule{}
