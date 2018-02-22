import {NgModule} from '@angular/core';

import {PsychologistRoutingModule} from './psychologist-routing.module';
import {PsychologistReportComponent} from './psychologist-report/psychologist-report.component';
import {PsychologistHomeComponent} from './psychologist-home/psychologist-home.component';
import {PsychologistEvaluateComponent} from './psychologist-evaluate/psychologist-evaluate.component';
import {PsychologistProfileComponent} from './psychologist-profile/psychologist-profile.component';
import {PsychologistSidebarComponent} from './psychologist-sidebar/psychologist-sidebar.component';
import {SharedModule} from "../shared/shared.module";
import {PsychologistAddressComponent} from './psychologist-address/psychologist-address.component';

@NgModule({
  imports: [
    SharedModule,
    PsychologistRoutingModule
  ],
  declarations: [
    PsychologistReportComponent,
    PsychologistHomeComponent,
    PsychologistEvaluateComponent,
    PsychologistProfileComponent,
    PsychologistSidebarComponent,
    PsychologistAddressComponent]
})
export class PsychologistModule {
}
