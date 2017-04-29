import './rxjs.extensions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutesServerUtil} from "./routes-api/routes-server.util";
import {RoutesClientUtil} from "./routes-api/routes-cient.util";
import {ClientService} from "./services/client.service";
import { FormComponent } from './form/form.component';
import {CamelCasePipe} from "./pipes/camel-case.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormComponent,
    CamelCasePipe
  ],
  providers: [
    RoutesServerUtil,
    RoutesClientUtil,
    ClientService
  ],
  exports: [
    FormComponent,
    CamelCasePipe
  ]
})
export class SharedModule { }