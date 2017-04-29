import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import {RoutingModule} from "./app.routing";
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
import {InstructorModule} from "./instructor/instructor.module";
import {DelegateModule} from "./delegate/delegate.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RoutingModule,
    ValidatorModule,
    ClientModule,
    AdminModule,
    InstructorModule,
    DelegateModule,
    SharedModule
  ],
  providers: [

  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
