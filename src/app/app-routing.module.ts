import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FaqComponent} from "./faq/faq.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'usuario', loadChildren: 'app/client/client.module#ClientModule'},
  { path: 'instrutor', loadChildren: 'app/examinator/examinator.module#ExaminatorModule'},
  { path: 'delegado', loadChildren: 'app/delegate/delegate.module#DelegateModule'},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'validador', loadChildren: 'app/validator/validator.module#ValidatorModule'},
  { path: 'duvidas', component: FaqComponent},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
