import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from "./admin.routing";
import { MenuComponent } from './admin-sidebar/menu/menu.component';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent,
    MenuComponent,
    AdminListComponent
  ]
})
export class AdminModule { }
