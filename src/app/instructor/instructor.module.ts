import {NgModule} from '@angular/core';

import {InstructorRoutingModule} from './instructor-routing.module';
import {InstructorEvaluateComponent} from './instructor-evaluate/instructor-evaluate.component';
import {InstructorHomeComponent} from './instructor-home/instructor-home.component';
import {InstructorProfileComponent} from './instructor-profile/instructor-profile.component';
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    SharedModule,
    InstructorRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    InstructorEvaluateComponent,
    InstructorHomeComponent,
    InstructorProfileComponent,
  ]
})
export class InstructorModule {
}
