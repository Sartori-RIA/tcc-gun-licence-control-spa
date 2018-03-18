import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginRouting} from './login.routing';
import {LoginHomeComponent} from './login-home.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRouting
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    LoginHomeComponent,
  ]
})
export class LoginModule {
}
