/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RegisterDelegateComponent} from "./register-delegate/register-delegate.component";
import {ListExamsComponent} from "./list-exams/list-exams.component";
import {ListPsychologistComponent} from "./list-psychologist/list-psychologist.component";


const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children : [
    { path: 'usuario/novo', component: RegisterDelegateComponent},
    { path: 'listagem/exames', component: ListExamsComponent},
    { path: 'listagem/usuarios', component: ListPsychologistComponent},
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule{}
