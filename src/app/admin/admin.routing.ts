/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";


const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children : [

  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule{}
