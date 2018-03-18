import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {AdminRegisterLicensesComponent} from './admin-register-licenses/admin-register-licenses.component';
import {AdminRegisterExamsComponent} from './admin-register-exams/admin-register-exams.component';
import {AdminRegisterCititesComponent} from './admin-register-citites/admin-register-citites.component';
import {AdminRegisterStatesComponent} from './admin-register-states/admin-register-states.component';
import {AdminRegisterUserComponent} from './admin-register-user/admin-register-user.component';
import {AdminRegisterCountriesComponent} from './admin-register-countries/admin-register-countries.component';
import {AdminReportsComponent} from './admin-reports/admin-reports.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminProfileComponent,
    AdminRegisterStatesComponent,
    AdminRegisterLicensesComponent,
    AdminRegisterExamsComponent,
    AdminRegisterCititesComponent,
    AdminRegisterUserComponent,
    AdminRegisterCountriesComponent,
    AdminReportsComponent
  ]
})
export class AdminModule {
}
