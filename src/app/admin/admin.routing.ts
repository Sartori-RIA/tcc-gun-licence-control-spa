/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RegisterDelegateComponent} from "./register-delegate/register-delegate.component";
import {RegisterInstructorComponent} from "./register-instructor/register-instructor.component";
import {RegisterPsychologistComponent} from "./register-psychologist/register-psychologist.component";
import {ListExamsComponent} from "./list-exams/list-exams.component";
import {ListPsychologistComponent} from "./list-psychologist/list-psychologist.component";
import {ListInstructorComponent} from "./list-instructor/list-instructor.component";
import {ListDelegateComponent} from "./list-delegate/list-delegate.component";


const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children : [
    { path: 'delegado/novo', component: RegisterDelegateComponent},
    { path: 'instrutor/novo', component: RegisterInstructorComponent},
    { path: 'psicologo/novo', component: RegisterPsychologistComponent},
    { path: 'listagem/exames', component: ListExamsComponent},
    { path: 'listagem/psicologos', component: ListPsychologistComponent},
    { path: 'listagem/instrutores', component: ListInstructorComponent},
    { path: 'listagem/delegados', component: ListDelegateComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule{}
