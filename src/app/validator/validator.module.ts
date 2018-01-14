import {NgModule} from '@angular/core';

import {ValidatorRoutingModule} from './validator-routing.module';
import {ValidatorComponent} from "./validator/validator.component";
import {LicenseValidComponent} from "./license-valid/license-valid.component";
import {LicenseInvalidComponent} from "./license-invalid/license-invalid.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ValidatorRoutingModule,
  ],
  declarations: [
    ValidatorComponent,
    LicenseValidComponent,
    LicenseInvalidComponent,
  ]
})
export class ValidatorModule {
}
