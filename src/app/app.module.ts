import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FooterComponent} from './views/footer/footer.component';
import {HeaderComponent} from './views/header/header.component';
import {AppLoaderModule} from "./services/app-loader/app-loader.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutes,
    AppLoaderModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
