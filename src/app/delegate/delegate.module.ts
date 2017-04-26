import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelegateHomeComponent } from './delegate-home/delegate-home.component';
import { DelegateSidebarComponent } from './delegate-sidebar/delegate-sidebar.component';
import {DelegateRoutingModule} from "./delegate.routing";
import { MenuComponent } from './delegate-sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    DelegateRoutingModule
  ],
  declarations: [
    DelegateHomeComponent,
    DelegateSidebarComponent,
    MenuComponent
  ]
})
export class DelegateModule { }
