import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelegateHomeComponent} from "./delegate-home/delegate-home.component";
import {DelegateProfileComponent} from "./delegate-profile/delegate-profile.component";

const routes: Routes = [
  {
    path: '', component: DelegateHomeComponent, children: [
      {path: 'perfil', component: DelegateProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelegateRoutingModule {
}
