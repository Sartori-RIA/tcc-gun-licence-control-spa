import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import './rxjs.extensions';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatDatepickerModule, MatIconModule, MatInputModule,
  MatMenuModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {SharedListsComponent} from './components/shared-lists/shared-lists.component';
import {CamelCasePipe} from './pipes/camel-case.pipe';
import {SharedFormComponent} from './components/shared-form/shared-form.component';
import {ExaminatorService} from './services/examinator.service';
import {UserService} from './services/user.service';
import {RoutesClientUtil} from './routes-api/routes-client.util';
import {CampoControlErrorComponent} from './components/shared-campo-control-error/shared-campo-control-error.component';
import {ExamCategoryService} from './services/exam-category.service';
import {LicenceCategoryService} from './services/licence-category.service';
import {GenderService} from './services/gender.service';
import {UserCategoryService} from './services/user-category.service';
import {CpfPipe} from './pipes/cpf.pipe';
import {CpfDirective} from './directives/cpf.directive';
import {SharedFlashMessageComponent} from './components/shared-flash-message/shared-flash-message.component';
import {ReversePipe} from './pipes/reverse.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import {CepService} from "./services/cep.service";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {AuthClientGuard} from "./guards/auth-client.guard";
import {AuthDelegateGuard} from "./guards/auth-delegate.guard";
import {AuthInstructorGuard} from "./guards/auth-instructor.guard";
import {AuthPsychologistGuard} from "./guards/auth-psychologist.guard";
import {SharedUserDetailComponent} from './components/shared-user-detail/shared-user-detail.component';
import {LicenseValidatorService} from "./services/license-validator.service";
import { SharedReportUsersListComponent } from './components/shared-report-users-list/shared-report-users-list.component';
import {CountryService} from "./services/country.service";
import {StateService} from "./services/state.service";
import {CityService} from "./services/city.service";
import { SharedFormAddressComponent } from './components/shared-form-address/shared-form-address.component';
import { SharedUserAddressListComponent } from './components/shared-user-address-list/shared-user-address-list.component';
import {AddressService} from "./services/address.service";
import { SharedUserUpdateComponent } from './components/shared-user-update/shared-user-update.component';
import {ExamService} from "./services/exam.service";
import { SharedExamEvaluateComponent } from './components/shared-exam-evaluate/shared-exam-evaluate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    CamelCasePipe,
    CampoControlErrorComponent,
    CpfPipe,
    CpfDirective,
    ReversePipe,
    FilterPipe,
    SharedUserDetailComponent,
    SharedFlashMessageComponent,
    SharedFormComponent,
    SharedListsComponent,
    SharedReportUsersListComponent,
    SharedFormAddressComponent,
    SharedUserAddressListComponent,
    SharedUserUpdateComponent,
    SharedExamEvaluateComponent,
  ],
  providers: [
    RoutesClientUtil,
    UserService,
    ExaminatorService,
    ExamCategoryService,
    LicenceCategoryService,
    GenderService,
    UserCategoryService,
    CepService,
    LicenseValidatorService,
    CountryService,
    StateService,
    CityService,
    AddressService,
    ExamService,
    AuthAdminGuard,
    AuthClientGuard,
    AuthDelegateGuard,
    AuthInstructorGuard,
    AuthPsychologistGuard,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CamelCasePipe,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    CpfPipe,
    CpfDirective,
    ReversePipe,
    FilterPipe,
    SharedUserDetailComponent,
    SharedFlashMessageComponent,
    SharedFormComponent,
    SharedListsComponent,
    SharedReportUsersListComponent,
    SharedFormAddressComponent,
    SharedUserAddressListComponent,
    SharedUserUpdateComponent,
    SharedExamEvaluateComponent,
  ]
})
export class SharedModule {
}
