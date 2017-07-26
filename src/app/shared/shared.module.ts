import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import './rxjs.extensions';
import {
  MdButtonModule, MdCardModule,
  MdCoreModule,
  MdDatepickerModule, MdIconModule, MdInputModule, MdMenuModule, MdNativeDateModule, MdRadioModule,
  MdSelectModule, MdSidenavModule, MdTabsModule, MdToolbarModule
} from "@angular/material";
import {ListsComponent} from "./components/lists/lists.component";
import {CamelCasePipe} from "./pipes/camel-case.pipe";
import {FormComponent} from "./components/form/form.component";
import {ExaminatorService} from "./services/examinator.service";
import {ClientService} from "./services/client.service";
import {RoutesClientUtil} from "./routes-api/routes-client.util";
import {RoutesServerUtil} from "./routes-api/routes-server.util";
import {CampoControlErrorComponent} from "./components/campo-control-error/campo-control-error.component";
import {FormUserInfoComponent} from "./components/form-user-info/form-user-info.component";
import {FormUserAddressComponent} from "./components/form-user-address/form-user-address.component";
import {FormUserTypeComponent} from "./components/form-user-type/form-user-type.component";
import {ExamCategoryService} from "./services/exam-category.service";
import {LicenceCategoryService} from "./services/licence-category.service";
import {SexService} from "./services/sex.service";
import {UserCategoryService} from "./services/user-category.service";
import {AbstractService} from "./services/abstract.service";

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
    MdIconModule
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
    ExaminatorService,
    ExamCategoryService,
    LicenceCategoryService,
    SexService,
    UserCategoryService,
    AbstractService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
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
