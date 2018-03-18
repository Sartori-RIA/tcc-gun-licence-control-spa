import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthAdminGuard} from './shared/guard/auth-admin.guard';
import {AuthDelegateGuard} from './shared/guard/auth-delegate.guard';
import {AuthExaminatorGuard} from './shared/guard/auth-examinator.guard';
import {AuthClientGuard} from './shared/guard/auth-client.guard';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/views/home/home.module#HomeModule'},
  {path: 'faq', loadChildren: 'app/views/faq/faq.module#FaqModule'},
  {path: 'login', loadChildren: 'app/views/login/login.module#LoginModule'},
  {path: '404', loadChildren: 'app/views/not-found/not-found.module#NotFoundModule'},
  {path: 'examinador', loadChildren: 'app/examinator/examinator.module#ExaminatorModule', canActivate: [AuthExaminatorGuard]},
  {path: 'delegado', loadChildren: 'app/delegate/delegate.module#DelegateModule', canActivate: [AuthDelegateGuard]},
  {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthAdminGuard]},
  {path: 'civil', loadChildren: 'app/client/client.module#ClientModule', canActivate: [AuthClientGuard]},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutes {
}

