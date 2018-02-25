import {NgModule} from '@angular/core';

import {ClientRoutingModule} from './client-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientLicenceComponent} from './client-licence/client-licence.component';
import {ClientExamsComponent} from './client-exams/client-exams.component';
import {ClientAgendaComponent} from './client-agenda/client-agenda.component';
import {ClientAddressComponent} from './client-address/client-address.component';
import {ClientUpdateComponent} from './client-update/client-update.component';

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [
    ClientHomeComponent,
    ClientProfileComponent,
    ClientLicenceComponent,
    ClientExamsComponent,
    ClientAgendaComponent,
    ClientAddressComponent,
    ClientUpdateComponent
  ]
})
export class ClientModule {
}
