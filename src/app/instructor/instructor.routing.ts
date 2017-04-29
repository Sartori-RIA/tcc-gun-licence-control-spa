/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructorHomeComponent} from "./instructor-home/instructor-home.component";
import {InstructorRegisterComponent} from "./instructor-register/instructor-register.component";


const instructorRoutes: Routes = [
  { path: '', component: InstructorHomeComponent, children : [
    { path: 'novo', component: InstructorRegisterComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(instructorRoutes)],
  exports: [ RouterModule]
})
export class InstructorRoutingModule{}
