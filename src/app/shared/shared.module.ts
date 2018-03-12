import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import './rxjs.extensions';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CamelCasePipe} from './pipes/camel-case.pipe';
import {ExaminatorService} from './services/examinator.service';
import {UserService} from './services/user.service';
import {RoutesClientUtil} from './routes-api/routes-client.util';
import {ExamCategoryService} from './services/exam-category.service';
import {LicenseCategoryService} from './services/license-category.service';
import {GenderService} from './services/gender.service';
import {UserCategoryService} from './services/user-category.service';
import {CpfPipe} from './pipes/cpf.pipe';
import {CpfDirective} from './directives/cpf.directive';
import {FlashMessageComponent} from './components/flash-message/flash-message.component';
import {ReversePipe} from './pipes/reverse.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import {CepService} from "./services/cep.service";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {AuthClientGuard} from "./guards/auth-client.guard";
import {AuthDelegateGuard} from "./guards/auth-delegate.guard";
import {AuthInstructorGuard} from "./guards/auth-instructor.guard";
import {AuthPsychologistGuard} from "./guards/auth-psychologist.guard";
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {LicenseValidatorService} from "./services/license-validator.service";
import {ReportUsersListComponent} from './components/report-users-list/report-users-list.component';
import {CountryService} from "./services/country.service";
import {StateService} from "./services/state.service";
import {CityService} from "./services/city.service";
import {FormAddressComponent} from './components/form-address/form-address.component';
import {UserAddressListComponent} from './components/user-address-list/user-address-list.component';
import {AddressService} from "./services/address.service";
import {UserUpdateComponent} from './components/user-update/user-update.component';
import {ExamService} from "./services/exam.service";
import {ExamEvaluateComponent} from './components/exam-evaluate/exam-evaluate.component';
import {RequirementService} from "./services/requirement.service";
import {LicenseService} from "./services/license.service";
import {DialogComponent} from './components/dialog/dialog.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {AddressComponent} from './components/address/address.component';
import {DateConverter} from "./util/date-converter";
import {RgPipe} from './pipes/rg.pipe';
import {CdkTableModule} from "@angular/cdk/table";
import {HttpErrorService} from "./services/http-error.service";
import {UserExamHistoryComponent} from './components/user-exam-history/user-exam-history.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {RouterModule} from "@angular/router";
import {ValidLicenseComponent} from './components/valid-license/valid-license.component';
import {ProgressLicenseComponent} from './components/progress-license/progress-license.component';
import {NgxCarouselModule} from "ngx-carousel";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontSizeDirective} from './directives/font-size.directive';
import {ScrollToDirective} from './directives/scroll-to.directive';
import {CustomFormsModule} from "ng2-validation";

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
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    NgxDatatableModule,
    MatCheckboxModule,
    CdkTableModule,
    RouterModule,
    NgxCarouselModule,
    FlexLayoutModule,
  ],
  declarations: [
    CamelCasePipe,
    CpfPipe,
    CpfDirective,
    FontSizeDirective,
    ScrollToDirective,
    ReversePipe,
    FilterPipe,
    UserDetailComponent,
    FlashMessageComponent,
    ReportUsersListComponent,
    FormAddressComponent,
    UserAddressListComponent,
    UserUpdateComponent,
    ExamEvaluateComponent,
    DialogComponent,
    AddressComponent,
    RgPipe,
    UserExamHistoryComponent,
    SideBarComponent,
    ValidLicenseComponent,
    ProgressLicenseComponent,
    FontSizeDirective,
    ScrollToDirective,
  ],
  providers: [
    RoutesClientUtil,
    DateConverter,
    UserService,
    ExaminatorService,
    ExamCategoryService,
    LicenseCategoryService,
    GenderService,
    UserCategoryService,
    CepService,
    LicenseValidatorService,
    CountryService,
    StateService,
    CityService,
    AddressService,
    ExamService,
    HttpErrorService,
    RequirementService,
    LicenseService,
    AuthAdminGuard,
    AuthClientGuard,
    AuthDelegateGuard,
    AuthInstructorGuard,
    AuthPsychologistGuard,
  ],
  entryComponents: [
    DialogComponent
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
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatCheckboxModule,
    NgxDatatableModule,
    CpfPipe,
    RgPipe,
    CpfDirective,
    FontSizeDirective,
    ScrollToDirective,
    ReversePipe,
    FilterPipe,
    UserDetailComponent,
    FlashMessageComponent,
    ReportUsersListComponent,
    FormAddressComponent,
    UserAddressListComponent,
    UserUpdateComponent,
    ExamEvaluateComponent,
    DialogComponent,
    UserExamHistoryComponent,
    AddressComponent,
    SideBarComponent,
    CdkTableModule,
    RouterModule,
    NgxCarouselModule,
    ValidLicenseComponent,
    ProgressLicenseComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule {
}
