import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { InstructorSidebarComponent } from './instructor-sidebar/instructor-sidebar.component';
import {InstructorRoutingModule} from "./instructor.routing";

@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule

  ],
  declarations: [
    InstructorHomeComponent,
    InstructorSidebarComponent
  ]
})
export class InstructorModule { }
