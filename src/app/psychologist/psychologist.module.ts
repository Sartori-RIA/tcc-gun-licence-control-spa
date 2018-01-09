import {NgModule} from '@angular/core';

import {PsychologistRoutingModule} from './psychologist-routing.module';
import {PsychologistReportComponent} from './psychologist-report/psychologist-report.component';
import {PsychologistHomeComponent} from './psychologist-home/psychologist-home.component';
import {PsychologistEvaluateComponent} from './psychologist-evaluate/psychologist-evaluate.component';
import {PsychologistProfileComponent} from './psychologist-profile/psychologist-profile.component';
import {PsychologistSidebarComponent} from './psychologist-sidebar/psychologist-sidebar.component';
import {PsychologistMenuComponent} from './psychologist-sidebar/psychologist-menu/psychologist-menu.component';
import {SharedModule} from "../shared/shared.module";

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
    PsychologistMenuComponent]
})
export class PsychologistModule {
}
