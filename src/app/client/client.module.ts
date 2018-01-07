import {NgModule} from '@angular/core';

import {ClientRoutingModule} from './client-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ClientHomeComponent} from './client-home/client-home.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {ClientLicenceComponent} from './client-licence/client-licence.component';
import {ClientExamsComponent} from './client-exams/client-exams.component';
import {ClientSidebarComponent} from './client-sidebar/client-sidebar.component';
import {MenuComponent} from './client-sidebar/menu/menu.component';
import {FormDebugComponent} from '../shared/components/form-debug/form-debug.component';
import {ClientAgendaComponent} from './client-agenda/client-agenda.component';

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
    ClientSidebarComponent,
    MenuComponent,
    FormDebugComponent,
    ClientAgendaComponent
  ]
})
export class ClientModule {
}
