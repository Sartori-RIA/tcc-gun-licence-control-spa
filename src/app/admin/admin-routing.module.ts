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

const routes: Routes = [
  {
    path: '', component: AdminHomeComponent, children: [
      {path: 'cadastro/usuario', component: AdminRegisterUserComponent},
      {path: 'cadastro/paises', component: AdminRegisterCountriesComponent},
      {path: 'cadastro/estados', component: AdminRegisterStatesComponent},
      {path: 'cadastro/cidades', component: AdminRegisterCititesComponent},
      {path: 'cadastro/exames', component: AdminRegisterExamsComponent},
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
