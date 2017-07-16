import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from "./admin.routing";
import { MenuComponent } from './admin-sidebar/menu/menu.component';
import {SharedModule} from "../shared/shared.module";
import { RegisterDelegateComponent } from './register-delegate/register-delegate.component';
import { ListPsychologistComponent } from './list-psychologist/list-psychologist.component';
import { ListExamsComponent } from './list-exams/list-exams.component';

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
    RegisterDelegateComponent,
    ListPsychologistComponent,
    ListExamsComponent
  ]
})
export class AdminModule { }
