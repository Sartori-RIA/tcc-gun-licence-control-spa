import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminSidebarComponent} from "./admin-sidebar/admin-sidebar.component";
import {AdminMenuComponent} from "./admin-sidebar/admin-menu/admin-menu.component";
import {AdminRegisterUserComponent} from "./admin-register-user/admin-register-user.component";
import {AdminReportsComponent} from "./admin-reports/admin-reports.component";
import { AdminRegisterCountriesComponent } from './admin-register-countries/admin-register-countries.component';
import { AdminRegisterStatesComponent } from './admin-register-states/admin-register-states.component';
import { AdminRegisterCititesComponent } from './admin-register-citites/admin-register-citites.component';
import { AdminRegisterExamsComponent } from './admin-register-exams/admin-register-exams.component';

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
    AdminProfileComponent,
    AdminRegisterCountriesComponent,
    AdminRegisterStatesComponent,
    AdminRegisterCititesComponent,
    AdminRegisterExamsComponent,
  ]
})
export class AdminModule {
}
