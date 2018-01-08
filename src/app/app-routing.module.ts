import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FaqComponent} from './components/faq/faq.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterYourselfComponent} from './components/register-yourself/register-yourself.component';
import {AuthClientGuard} from "./shared/guards/auth-client.guard";
import {AuthInstructorGuard} from "./shared/guards/auth-instructor.guard";
import {AuthDelegateGuard} from "./shared/guards/auth-delegate.guard";
import {AuthAdminGuard} from "./shared/guards/auth-admin.guard";
import {AuthPsychologistGuard} from "./shared/guards/auth-psychologist.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'civil',
    loadChildren: 'app/client/client.module#ClientModule',
    canActivate: [AuthClientGuard]
  },
  {
    path: 'instrutor',
    loadChildren: 'app/instructor/instructor.module#InstructorModule',
    canActivate: [AuthInstructorGuard]
  }, {
    path: 'psicologo',
    loadChildren: 'app/psychologist/psychologist.module#PsychologistModule',
    canActivate: [AuthPsychologistGuard]
  },
  {
    path: 'delegado',
    loadChildren: 'app/delegate/delegate.module#DelegateModule',
    canActivate: [AuthDelegateGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthAdminGuard]
  },
  {path: 'validador', loadChildren: 'app/validator/validator.module#ValidatorModule'},
  {path: 'login', component: LoginComponent},
  {path: 'registre-se', component: RegisterYourselfComponent},
  {path: 'duvidas', component: FaqComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
