import {NgModule} from '@angular/core';

import {InstructorRoutingModule} from './instructor-routing.module';
import {InstructorEvaluateComponent} from './instructor-evaluate/instructor-evaluate.component';
import {InstructorHomeComponent} from './instructor-home/instructor-home.component';
import {InstructorListComponent} from './instructor-list/instructor-list.component';
import {InstructorProfileComponent} from './instructor-profile/instructor-profile.component';
import {InstructorSidebarComponent} from './instructor-sidebar/instructor-sidebar.component';
import {InstructorMenuComponent} from './instructor-sidebar/instructor-menu/instructor-menu.component';
import {SharedModule} from "../shared/shared.module";
import { InstructorAddressComponent } from './instructor-address/instructor-address.component';
import { InstructorReportComponent } from './instructor-report/instructor-report.component';

@NgModule({
  imports: [
    SharedModule,
    InstructorRoutingModule
  ],
  declarations: [
    InstructorEvaluateComponent,
    InstructorHomeComponent,
    InstructorListComponent,
    InstructorProfileComponent,
    InstructorSidebarComponent,
    InstructorMenuComponent,
    InstructorAddressComponent,
    InstructorReportComponent
  ]
})
export class InstructorModule {
}
