import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from "./admin.routing";
import { MenuComponent } from './admin-sidebar/menu/menu.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import {SharedModule} from "../shared/shared.module";
import { RegisterDelegateComponent } from './register-delegate/register-delegate.component';
import { RegisterInstructorComponent } from './register-instructor/register-instructor.component';
import { RegisterPsychologistComponent } from './register-psychologist/register-psychologist.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent,
    MenuComponent,
    AdminListComponent,
    RegisterDelegateComponent,
    RegisterInstructorComponent,
    RegisterPsychologistComponent
  ]
})
export class AdminModule { }
