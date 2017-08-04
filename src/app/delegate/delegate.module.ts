import { NgModule } from '@angular/core';

import { DelegateRoutingModule } from './delegate-routing.module';
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    DelegateRoutingModule
  ],
  declarations: [HomeComponent]
})
export class DelegateModule { }
