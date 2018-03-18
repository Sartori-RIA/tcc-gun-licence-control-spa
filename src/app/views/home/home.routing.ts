import {RouterModule, Routes} from '@angular/router';

import {HomeOneComponent} from './home-one.component';
import {NgModule} from '@angular/core';

export const HomeRoutes: Routes = [
  {path: '', component: HomeOneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRouting {
}
