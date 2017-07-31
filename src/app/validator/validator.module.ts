import { NgModule } from '@angular/core';

import { ValidatorRoutingModule } from './validator-routing.module';
import {ValidatorComponent} from "./validator/validator.component";
import {LicenceValidComponent} from "./licence-valid/licence-valid.component";
import {LicenceInvalidComponent} from "./licence-invalid/licence-invalid.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ValidatorRoutingModule,
  ],
  declarations: [
    ValidatorComponent,
    LicenceValidComponent,
    LicenceInvalidComponent,
  ]
})
export class ValidatorModule { }
