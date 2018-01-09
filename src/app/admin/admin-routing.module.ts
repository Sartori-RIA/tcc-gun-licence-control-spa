import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminRegisterUserComponent} from "./admin-register-user/admin-register-user.component";
import {AdminReportsComponent} from "./admin-reports/admin-reports.component";

const routes: Routes = [
  {
    path: '', component: AdminHomeComponent, children: [
      {path: 'cadastro/usuario', component: AdminRegisterUserComponent},
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
