import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminRegisterUserComponent} from "./admin-register-user/admin-register-user.component";
import {AdminReportsComponent} from "./admin-reports/admin-reports.component";
import {AdminRegisterCountriesComponent} from "./admin-register-countries/admin-register-countries.component";
import {AdminRegisterStatesComponent} from "./admin-register-states/admin-register-states.component";
import {AdminRegisterCititesComponent} from "./admin-register-citites/admin-register-citites.component";
import {AdminRegisterExamsComponent} from "./admin-register-exams/admin-register-exams.component";
import {AdminRegisterLicensesComponent} from "./admin-register-licenses/admin-register-licenses.component";

const routes: Routes = [
  {
    path: '', component: AdminHomeComponent, children: [
      {
        path: 'cadastro', children: [
          {path: 'usuario', component: AdminRegisterUserComponent},
          {path: 'paises', component: AdminRegisterCountriesComponent},
          {path: 'estados', component: AdminRegisterStatesComponent},
          {path: 'cidades', component: AdminRegisterCititesComponent},
          {path: 'exames', component: AdminRegisterExamsComponent},
          {path: 'licencas', component: AdminRegisterLicensesComponent}
        ]
      },
      {path: 'relatorios', component: AdminReportsComponent},
      {path: 'perfil', component: AdminProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
