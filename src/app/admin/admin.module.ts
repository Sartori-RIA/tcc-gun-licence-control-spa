import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from "./admin.routing";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent
  ]
})
export class AdminModule { }
