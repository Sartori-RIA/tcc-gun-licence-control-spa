/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminListComponent} from "./admin-list/admin-list.component";


const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent, children : [
    { path: 'listagem', component: AdminListComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule{}
