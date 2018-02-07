import {NgModule} from '@angular/core';

import {DelegateRoutingModule} from './delegate-routing.module';
import {SharedModule} from "../shared/shared.module";
import {DelegateHomeComponent} from './delegate-home/delegate-home.component';
import {DelegateProfileComponent} from './delegate-profile/delegate-profile.component';
import {DelegateSidebarComponent} from './delegate-sidebar/delegate-sidebar.component';
import { DelegateAddressComponent } from './delegate-address/delegate-address.component';

@NgModule({
  imports: [
    SharedModule,
    DelegateRoutingModule
  ],
  declarations: [
    DelegateHomeComponent,
    DelegateProfileComponent,
    DelegateSidebarComponent,
    DelegateAddressComponent
  ]
})
export class DelegateModule {
}
