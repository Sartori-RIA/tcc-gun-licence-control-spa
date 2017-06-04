import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ValidatorComponent } from './validator/validator.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'usuario', loadChildren: 'app/client/client.module#ClientModule'},
  { path: 'instrutor', loadChildren: 'app/examinator/examinator.module#ExaminatorModule'},
  { path: 'psicologo', loadChildren: 'app/examinator/examinator.module#ExaminatorModule'},
  { path: 'delegado', loadChildren: 'app/delegate/delegate.module#DelegateModule'},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  { path: 'validador', component: ValidatorComponent},
  { path: 'duvidas', component: FaqComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
