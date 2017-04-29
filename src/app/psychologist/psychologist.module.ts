import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import {SharedModule} from "../shared/shared.module";
import { PsychologistSidebarComponent } from './psychologist-sidebar/psychologist-sidebar.component';
import { PsychologistHomeComponent } from './psychologist-home/psychologist-home.component';
import { MenuComponent } from './psychologist-sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    PsychologistRoutingModule,
    SharedModule
  ],
  declarations: [
    PsychologistSidebarComponent,
    PsychologistHomeComponent,
    MenuComponent
  ]
})
export class PsychologistModule { }
