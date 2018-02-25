import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminRegisterUserComponent} from "./admin-register-user/admin-register-user.component";
import {AdminReportsComponent} from "./admin-reports/admin-reports.component";
import {AdminRegisterCountriesComponent} from './admin-register-countries/admin-register-countries.component';
import {AdminRegisterStatesComponent} from './admin-register-states/admin-register-states.component';
import {AdminRegisterCititesComponent} from './admin-register-citites/admin-register-citites.component';
import {AdminRegisterExamsComponent} from './admin-register-exams/admin-register-exams.component';
import {AdminRegisterLicensesComponent} from './admin-register-licenses/admin-register-licenses.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminRegisterUserComponent,
    AdminReportsComponent,
    AdminProfileComponent,
    AdminRegisterCountriesComponent,
    AdminRegisterStatesComponent,
    AdminRegisterCititesComponent,
    AdminRegisterExamsComponent,
    AdminRegisterLicensesComponent,
  ]
})
export class AdminModule {
}
