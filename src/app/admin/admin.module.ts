import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from "./admin.routing";
import { MenuComponent } from './admin-sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent,
    MenuComponent
  ]
})
export class AdminModule { }
