import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientAgendaComponent} from './client-agenda/client-agenda.component';
import {ClientExamsComponent} from './client-exams/client-exams.component';
import {ClientHomeComponent} from './client-home/client-home.component';
import {ClientLicenceComponent} from './client-licence/client-licence.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientUpdateComponent} from './client-update/client-update.component';
import {ClientRoutingModule} from './client-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientAgendaComponent,
    ClientExamsComponent,
    ClientHomeComponent,
    ClientLicenceComponent,
    ClientProfileComponent,
    ClientUpdateComponent
  ]
})
export class ClientModule {
}
