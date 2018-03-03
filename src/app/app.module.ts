import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {FaqComponent} from './components/faq/faq.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SharedModule} from "./shared/shared.module";
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {DelegateModule} from "./delegate/delegate.module";
import {ValidatorModule} from "./validator/validator.module";
import {LoginComponent} from './components/login/login.component';
import {RegisterYourselfComponent} from './components/register-yourself/register-yourself.component';
import {AuthModule} from "./auth/auth.module";
import {HttpClientModule} from "@angular/common/http";
import {InstructorModule} from "./instructor/instructor.module";
import {PsychologistModule} from "./psychologist/psychologist.module";
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterYourselfComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ClientModule,
    AdminModule,
    DelegateModule,
    ValidatorModule,
    AuthModule,
    InstructorModule,
    PsychologistModule,
    FlexLayoutModule,
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
