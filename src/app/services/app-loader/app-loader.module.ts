import {NgModule} from '@angular/core';
import {MatDialogModule, MatProgressSpinnerModule} from '@angular/material';

import {AppLoaderService} from './app-loader.service';
import {AppLoaderComponent} from './app-loader.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    MatDialogModule,
    MatProgressSpinnerModule,

  ],
  providers: [AppLoaderService],
  declarations: [AppLoaderComponent],
  entryComponents: [AppLoaderComponent]
})
export class AppLoaderModule {
}
