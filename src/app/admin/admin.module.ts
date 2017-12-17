import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [
    HomeComponent,
    SidebarComponent,
    MenuComponent,
    RegisterUserComponent,
    ReportsComponent
  ]
})
export class AdminModule {}
