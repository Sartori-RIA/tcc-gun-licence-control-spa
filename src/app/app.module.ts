import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'materialize-css';
import 'hammerjs';
import {MaterializeModule} from 'angular2-materialize';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuComponent} from './navbar/menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from "./shared/shared.module";
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {DelegateModule} from "./delegate/delegate.module";
import {ExaminatorModule} from "./examinator/examinator.module";
import {ValidatorModule} from "./validator/validator.module";
import {LoginComponent} from './login/login.component';
import {RegisterYourselfComponent} from './register-yourself/register-yourself.component';
import {AuthModule} from "./auth/auth.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterYourselfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    SharedModule,
    ClientModule,
    AdminModule,
    DelegateModule,
    ExaminatorModule,
    ValidatorModule,
    AuthModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
