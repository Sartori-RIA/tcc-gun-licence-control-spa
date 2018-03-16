import {NgModule} from '@angular/core';

import {ExaminatorRoutingModule} from './examinator-routing.module';
import {ExaminatorEvaluateComponent} from './examinator-evaluate/examinator-evaluate.component';
import {ExaminatorHomeComponent} from './examinator-home/examinator-home.component';
import {ExaminatorProfileComponent} from './examinator-profile/examinator-profile.component';
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    SharedModule,
    ExaminatorRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    ExaminatorEvaluateComponent,
    ExaminatorHomeComponent,
    ExaminatorProfileComponent,
  ]
})
export class ExaminatorModule {
}
