import { NgModule } from '@angular/core';

import { ExaminatorRoutingModule } from './examinator-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ExaminatorRoutingModule
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    EvaluateComponent
  ]
})
export class ExaminatorModule { }
