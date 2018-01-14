import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidatorComponent} from "./validator/validator.component";
import {LicenseInvalidComponent} from "./license-invalid/license-invalid.component";

const routes: Routes = [
  {path: '', component: ValidatorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidatorRoutingModule {
}
