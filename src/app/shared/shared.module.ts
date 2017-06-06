import './rxjs.extensions';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RoutesServerUtil } from "./routes-api/routes-server.util";
import { RoutesClientUtil } from "./routes-api/routes-cient.util";
import { ClientService } from "./services/client.service";
import { FormComponent } from './components/form/form.component';
import { CamelCasePipe } from "./pipes/camel-case.pipe";
import { ListsComponent } from './components/lists/lists.component';
import { FormsModule } from "@angular/forms";
import { CampoControlErrorComponent } from './components/campo-control-error/campo-control-error.component';

import { ExaminatorService } from "./services/examinator.service";
import { FormUserInfoComponent } from './components/form-user-info/form-user-info.component';
import { FormUserAddressComponent } from './components/form-user-address/form-user-address.component';
import { FormUserTypeComponent } from './components/form-user-type/form-user-type.component';
import {
  MdButtonModule, MdCardModule,
  MdCoreModule,
  MdDatepickerModule, MdIconModule,
  MdInputModule, MdMenuModule,
  MdNativeDateModule, MdRadioModule,
  MdSelectModule, MdSidenavModule, MdTabsModule, MdTextareaAutosize, MdToolbarModule
} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdMenuModule,
    MdRadioModule,
    MdSidenavModule,
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule,
  ],
  declarations: [
    FormComponent,
    CamelCasePipe,
    ListsComponent,
    CampoControlErrorComponent,
    FormUserInfoComponent,
    FormUserAddressComponent,
    FormUserTypeComponent
  ],
  providers: [
    RoutesServerUtil,
    RoutesClientUtil,
    ClientService,
    ExaminatorService
  ],
  exports: [
    FormComponent,
    CamelCasePipe,
    ListsComponent,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdMenuModule,
    MdRadioModule,
    MdSidenavModule,
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule
  ]
})
export class SharedModule { }
