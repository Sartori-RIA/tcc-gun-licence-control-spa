import {NgModule} from '@angular/core';

import {NotFoundRoutingModule} from './not-found-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
