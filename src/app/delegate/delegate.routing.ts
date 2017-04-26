/**
 * Created by sartori on 19/04/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DelegateHomeComponent} from "./delegate-home/delegate-home.component";

const delegateRoutes: Routes = [
  { path: '', component: DelegateHomeComponent, children : [

  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(delegateRoutes)],
  exports: [ RouterModule]
})
export class DelegateRoutingModule{}
