import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginHomeComponent} from './login-home.component';
import {LoginComponent} from './login/login.component';

export const LoginRoutes: Routes = [
    {
      path: '', component: LoginHomeComponent, children: [
        {path: 'cadastre-se', component: RegisterComponent},
        {path: 'entrar', component: LoginComponent}
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRouting {
}
