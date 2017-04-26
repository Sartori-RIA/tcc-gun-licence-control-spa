import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegateHomeComponent } from './delegate-home/delegate-home.component';
import { DelegateSidebarComponent } from './delegate-sidebar/delegate-sidebar.component';
import {DelegateRoutingModule} from "./delegate.routing";

@NgModule({
  imports: [
    CommonModule,
    DelegateRoutingModule
  ],
  declarations: [
    DelegateHomeComponent,
    DelegateSidebarComponent
  ]
})
export class DelegateModule { }
