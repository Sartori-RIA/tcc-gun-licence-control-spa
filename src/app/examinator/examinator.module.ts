import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ExaminatorEvaluateComponent} from './examinator-evaluate/examinator-evaluate.component';
import {ExaminatorProfileComponent} from './examinator-profile/examinator-profile.component';
import {ExaminatorHomeComponent} from './examinator-home/examinator-home.component';
import {ExaminatorRoutingModule} from './examinator-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExaminatorRoutingModule
  ],
  declarations: [
    ExaminatorEvaluateComponent,
    ExaminatorProfileComponent,
    ExaminatorHomeComponent
  ]
})
export class ExaminatorModule {
}
