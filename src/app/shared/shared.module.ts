import './rxjs.extensions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutesServerUtil} from "./routes-api/routes-server.util";
import {RoutesClientUtil} from "./routes-api/routes-cient.util";
import {ClientService} from "./services/client.service";
import { FormComponent } from './components/form/form.component';
import {CamelCasePipe} from "./pipes/camel-case.pipe";
import { ListsComponent } from './components/lists/lists.component';
import {FormsModule} from "@angular/forms";
import { CampoControlErrorComponent } from './components/campo-control-error/campo-control-error.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormComponent,
    CamelCasePipe,
    ListsComponent,
    CampoControlErrorComponent
  ],
  providers: [
    RoutesServerUtil,
    RoutesClientUtil,
    ClientService
  ],
  exports: [
    FormComponent,
    CamelCasePipe,
    ListsComponent
  ]
})
export class SharedModule { }
