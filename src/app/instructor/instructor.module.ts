import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule
  ],
  declarations: [EvaluateComponent, HomeComponent, ListComponent]
})
export class InstructorModule { }
