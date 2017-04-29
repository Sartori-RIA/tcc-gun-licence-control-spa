import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegateHomeComponent } from './delegate-home/delegate-home.component';
import { DelegateSidebarComponent } from './delegate-sidebar/delegate-sidebar.component';
import {DelegateRoutingModule} from "./delegate.routing";
import { MenuComponent } from './delegate-sidebar/menu/menu.component';
import { ListExamsComponent } from './list-exams/list-exams.component';
import { ListInstructorsComponent } from './list-instructors/list-instructors.component';
import { ListPsychologistComponent } from './list-psychologist/list-psychologist.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DelegateRoutingModule,
    SharedModule
  ],
  declarations: [
    DelegateHomeComponent,
    DelegateSidebarComponent,
    MenuComponent,
    ListExamsComponent,
    ListInstructorsComponent,
    ListPsychologistComponent
  ]
})
export class DelegateModule { }
