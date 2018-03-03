import {NgModule} from '@angular/core';

import {PsychologistRoutingModule} from './psychologist-routing.module';
import {PsychologistHomeComponent} from './psychologist-home/psychologist-home.component';
import {PsychologistEvaluateComponent} from './psychologist-evaluate/psychologist-evaluate.component';
import {PsychologistProfileComponent} from './psychologist-profile/psychologist-profile.component';
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    SharedModule,
    PsychologistRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    PsychologistHomeComponent,
    PsychologistEvaluateComponent,
    PsychologistProfileComponent,
  ]
})
export class PsychologistModule {
}
