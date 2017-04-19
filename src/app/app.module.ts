import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import  './shared/rxjs.extensions';
import { AppComponent } from './app.component';
import {RoutingModule} from "./app.routing";
import {ValidatorModule} from "./validator/validator.module";
import {RoutesServerUtil} from "./shared/routes-api/routes-server.util";
import {RoutesClientUtil} from "./shared/routes-api/routes-cient.util";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FaqComponent} from "./faq/faq.component";
import {CamelCasePipe} from "./shared/pipes/camel-case.pipe";
import {MenuComponent} from "./navbar/menu/menu.component";
import {ClientModule} from "./client/client.module";
import {ClientService} from "./shared/services/client.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    CamelCasePipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ValidatorModule,
    ClientModule
  ],
  providers: [
    RoutesServerUtil,
    RoutesClientUtil,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
