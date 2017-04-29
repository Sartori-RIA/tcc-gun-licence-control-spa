/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminListComponent} from "./admin-list/admin-list.component";
import {RegisterDelegateComponent} from "./register-delegate/register-delegate.component";
import {RegisterInstructorComponent} from "./register-instructor/register-instructor.component";
import {RegisterPsychologistComponent} from "./register-psychologist/register-psychologist.component";


const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children : [
    { path: 'delegado/novo', component: RegisterDelegateComponent},
    { path: 'instrutor/novo', component: RegisterInstructorComponent},
    { path: 'psicologo/novo', component: RegisterPsychologistComponent},
    { path: 'listagem', component: AdminListComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule{}
