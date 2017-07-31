import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import 'hammerjs';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {ClientModule} from "./client/client.module";
import {LoginModule} from "./login/login.module";
import {AdminModule} from "./admin/admin.module";
import {DelegateModule} from "./delegate/delegate.module";
import {ExaminatorModule} from "./examinator/examinator.module";
import {ValidatorModule} from "./validator/validator.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    FaqComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AuthModule,
    SharedModule,
    ClientModule,
    LoginModule,
    AdminModule,
    DelegateModule,
    ExaminatorModule,
    ValidatorModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
