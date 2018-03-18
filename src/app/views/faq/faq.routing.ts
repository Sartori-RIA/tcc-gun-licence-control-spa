import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {FaqComponent} from './faq/faq.component';

export const FaqRoutes: Routes = [
  {path: '', component: FaqComponent},
];

@NgModule({
  imports: [RouterModule.forChild(FaqRoutes)],
  exports: [RouterModule]
})
export class FaqRouting {
}
