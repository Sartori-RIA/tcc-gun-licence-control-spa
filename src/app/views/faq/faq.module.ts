import {NgModule} from '@angular/core';
import {FaqComponent} from './faq/faq.component';
import {SharedModule} from '../../shared/shared.module';
import {FaqRouting} from './faq.routing';

@NgModule({
  imports: [
    SharedModule,
    FaqRouting
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule {
}
