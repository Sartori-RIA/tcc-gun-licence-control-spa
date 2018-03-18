import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DelegateAddressComponent} from './delegate-address/delegate-address.component';
import {DelegateHomeComponent} from './delegate-home/delegate-home.component';
import {DelegateProfileComponent} from './delegate-profile/delegate-profile.component';
import {DelegateReportsComponent} from './delegate-reports/delegate-reports.component';
import {DelegateRoutingModule} from './delegate-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DelegateRoutingModule
  ],
  declarations: [
    DelegateAddressComponent,
    DelegateHomeComponent,
    DelegateProfileComponent,
    DelegateReportsComponent
  ]
})
export class DelegateModule {
}
