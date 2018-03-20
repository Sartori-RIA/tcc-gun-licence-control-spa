import {NgModule} from '@angular/core';
import {NguCarouselModule} from '@ngu/carousel';
import {HomeRouting} from './home.routing';

import {HomeOneComponent} from './home-one.component';
import {IntroOneComponent} from './intro-one/intro-one.component';
import {ToolsComponent} from './tools/tools.component';

import {WINDOW_PROVIDERS} from '../../shared/helpers/window.helper';
import {ValidatorComponent} from './validator/validator.component';
import {SharedModule} from '../../shared/shared.module';
import {LegislationComponent} from './legislation/legislation.component';


@NgModule({
  imports: [
    SharedModule,
    NguCarouselModule,
    HomeRouting,
  ],
  declarations: [
    HomeOneComponent,
    IntroOneComponent,
    ToolsComponent,
    ValidatorComponent,
    LegislationComponent,
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule {
}
