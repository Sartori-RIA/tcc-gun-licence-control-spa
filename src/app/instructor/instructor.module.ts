import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorHomeComponent } from './instructor-home/instructor-home.component';
import { InstructorSidebarComponent } from './instructor-sidebar/instructor-sidebar.component';
import {InstructorRoutingModule} from "./instructor.routing";
import { MenuComponent } from './instructor-sidebar/menu/menu.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule
  ],
  declarations: [
    InstructorHomeComponent,
    InstructorSidebarComponent,
    MenuComponent,
    InstructorRegisterComponent,
  ]
})
export class InstructorModule { }
