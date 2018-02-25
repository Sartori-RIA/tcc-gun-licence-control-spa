import {NgModule} from '@angular/core';

import {ValidatorRoutingModule} from './validator-routing.module';
import {ValidatorComponent} from "./validator/validator.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ValidatorRoutingModule,
  ],
  declarations: [
    ValidatorComponent,
  ]
})
export class ValidatorModule {
}
