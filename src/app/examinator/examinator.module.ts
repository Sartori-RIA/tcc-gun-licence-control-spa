import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminatorRoutingModule } from './examinator-routing.module';
import { ExaminatorSidebarComponent } from './examinator-sidebar/examinator-sidebar.component';
import { ExaminatorHomeComponent } from './examinator-home/examinator-home.component';
import { MenuComponent } from './examinator-sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    ExaminatorRoutingModule
  ],
  declarations: [
    ExaminatorSidebarComponent,
    ExaminatorHomeComponent,
    MenuComponent]
})
export class ExaminatorModule { }
