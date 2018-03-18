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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ExaminatorModule} from "./examinator/examinator.module";
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CarouselComponent} from './components/carousel/carousel.component';
import {TokenInterceptor} from "./shared/interceptors/token.interceptor";
import {WINDOW_PROVIDERS} from "./shared/helpers/window.helper";
import {HeaderComponent} from './components/header/header.component';
import {NgxMaskModule} from 'ngx-mask'

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
    HeaderComponent,
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
    ExaminatorModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot({})
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
