import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {ReportsComponent} from "./reports/reports.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
    {path: 'cadastro/usuario', component: RegisterUserComponent},
    {path: 'relatorios', component: ReportsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
