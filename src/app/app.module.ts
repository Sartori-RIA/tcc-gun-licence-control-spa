import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'materialize-css';
import 'hammerjs';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ValidatorModule} from "./validator/validator.module";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FaqComponent} from "./faq/faq.component";
import {MenuComponent} from "./navbar/menu/menu.component";
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {DelegateModule} from "./delegate/delegate.module";
import {SharedModule} from "./shared/shared.module";
import {ExaminatorModule} from "./examinator/examinator.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    ValidatorModule,
    ClientModule,
    AdminModule,
    DelegateModule,
    SharedModule,
    ExaminatorModule,
    AuthModule
  ],
  providers: [

  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
