/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DelegateHomeComponent} from "./delegate-home/delegate-home.component";
import {ListExamsComponent} from "./list-exams/list-exams.component";
import {ListPsychologistComponent} from "./list-psychologist/list-psychologist.component";
import {ListInstructorsComponent} from "./list-instructors/list-instructors.component";

const delegateRoutes: Routes = [
  { path: '', component: DelegateHomeComponent, children : [
    { path: 'listagem/exames', component: ListExamsComponent },
    { path: 'listagem/psicologos', component: ListPsychologistComponent },
    { path: 'listagem/instrutores', component: ListInstructorsComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(delegateRoutes)],
  exports: [ RouterModule]
})
export class DelegateRoutingModule{}
