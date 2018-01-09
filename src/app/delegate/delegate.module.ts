import {NgModule} from '@angular/core';

import {DelegateRoutingModule} from './delegate-routing.module';
import {SharedModule} from "../shared/shared.module";
import {DelegateHomeComponent} from './delegate-home/delegate-home.component';
import {DelegateProfileComponent} from './delegate-profile/delegate-profile.component';
import {DelegateSidebarComponent} from './delegate-sidebar/delegate-sidebar.component';
import {DelegateMenuComponent} from './delegate-sidebar/delegate-menu/delegate-menu.component';

@NgModule({
  imports: [
    SharedModule,
    DelegateRoutingModule
  ],
  declarations: [
    DelegateHomeComponent,
    DelegateProfileComponent,
    DelegateSidebarComponent,
    DelegateMenuComponent
  ]
})
export class DelegateModule {
}
