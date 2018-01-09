import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminSidebarComponent} from "./admin-sidebar/admin-sidebar.component";
import {AdminMenuComponent} from "./admin-sidebar/admin-menu/admin-menu.component";
import {AdminRegisterUserComponent} from "./admin-register-user/admin-register-user.component";
import {AdminReportsComponent} from "./admin-reports/admin-reports.component";

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminMenuComponent,
    AdminRegisterUserComponent,
    AdminReportsComponent,
    AdminProfileComponent
  ]
})
export class AdminModule {
}
