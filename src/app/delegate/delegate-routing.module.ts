import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelegateHomeComponent} from "./delegate-home/delegate-home.component";
import {DelegateProfileComponent} from "./delegate-profile/delegate-profile.component";
import {DelegateAddressComponent} from "./delegate-address/delegate-address.component";

const routes: Routes = [
  {
    path: '', component: DelegateHomeComponent, children: [
      {path: 'perfil', component: DelegateProfileComponent},
      {path: 'enderecos', component: DelegateAddressComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelegateRoutingModule {
}
