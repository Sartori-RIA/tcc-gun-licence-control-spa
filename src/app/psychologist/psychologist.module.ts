import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologistRoutingModule } from './psychologist-routing.module';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { EvaluateComponent } from './evaluate/evaluate.component';

@NgModule({
  imports: [
    CommonModule,
    PsychologistRoutingModule
  ],
  declarations: [ListComponent, HomeComponent, EvaluateComponent]
})
export class PsychologistModule { }
