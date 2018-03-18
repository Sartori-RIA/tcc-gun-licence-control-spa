import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontSizeDirective} from './font-size.directive';
import {ScrollToDirective} from './scroll-to.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FontSizeDirective,
    ScrollToDirective
  ],
  exports: [
    FontSizeDirective,
    ScrollToDirective
  ]
})
export class CommonDirectivesModule {
}
