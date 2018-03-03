import {NgModule} from '@angular/core';

import {ClientRoutingModule} from './client-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientLicenceComponent} from './client-licence/client-licence.component';
import {ClientExamsComponent} from './client-exams/client-exams.component';
import {ClientAgendaComponent} from './client-agenda/client-agenda.component';
import {ClientUpdateComponent} from './client-update/client-update.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    SharedModule,
    ClientRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    ClientHomeComponent,
    ClientProfileComponent,
    ClientLicenceComponent,
    ClientExamsComponent,
    ClientAgendaComponent,
    ClientUpdateComponent
  ]
})
export class ClientModule {
}
