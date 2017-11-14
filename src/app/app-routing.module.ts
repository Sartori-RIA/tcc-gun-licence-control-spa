import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {RegisterYourselfComponent} from './register-yourself/register-yourself.component';
import {AuthGuard} from './auth/auth.guard';
import {DeactivateGuard} from './shared/guards/deactivate.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuario', loadChildren: 'app/client/client.module#ClientModule'},
  {path: 'instrutor', loadChildren: 'app/examinator/examinator.module#ExaminatorModule', canActivate: [AuthGuard]},
  {path: 'delegado', loadChildren: 'app/delegate/delegate.module#DelegateModule', canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  {path: 'validador', loadChildren: 'app/validator/validator.module#ValidatorModule'},
  {path: 'login', component: LoginComponent},
  {path: 'registre-se', component: RegisterYourselfComponent, canDeactivate: [DeactivateGuard]},
  {path: 'duvidas', component: FaqComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
