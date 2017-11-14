import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import './rxjs.extensions';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatRadioModule,
  MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {ListsComponent} from './components/lists/lists.component';
import {CamelCasePipe} from './pipes/camel-case.pipe';
import {FormComponent} from './components/form/form.component';
import {ExaminatorService} from './services/examinator.service';
import {ClientService} from './services/user.service';
import {RoutesClientUtil} from './routes-api/routes-client.util';
import {RoutesServerUtil} from './routes-api/routes-server.util';
import {CampoControlErrorComponent} from './components/campo-control-error/campo-control-error.component';
import {FormUserInfoComponent} from './components/form-user-info/form-user-info.component';
import {FormUserAddressComponent} from './components/form-user-address/form-user-address.component';
import {FormUserTypeComponent} from './components/form-user-type/form-user-type.component';
import {ExamCategoryService} from './services/exam-category.service';
import {LicenceCategoryService} from './services/licence-category.service';
import {SexService} from './services/sex.service';
import {UserCategoryService} from './services/user-category.service';
import {CpfPipe} from './pipes/cpf.pipe';
import {CpfDirective} from './directives/cpf.directive';
import {FlashMessageComponent} from './components/flash-message/flash-message.component';
import {SearchComponent} from './components/search/search.component';
import {ReversePipe} from './pipes/reverse.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {DeactivateGuard} from './guards/deactivate.guard';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    FormComponent,
    CamelCasePipe,
    ListsComponent,
    CampoControlErrorComponent,
    FormUserInfoComponent,
    FormUserAddressComponent,
    FormUserTypeComponent,
    CpfPipe,
    CpfDirective,
    FlashMessageComponent,
    SearchComponent,
    ReversePipe,
    FilterPipe
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
    DeactivateGuard
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormComponent,
    CamelCasePipe,
    ListsComponent,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    CpfPipe,
    CpfDirective,
    SearchComponent,
    ReversePipe,
    FilterPipe,
  ]
})
export class SharedModule {
}
