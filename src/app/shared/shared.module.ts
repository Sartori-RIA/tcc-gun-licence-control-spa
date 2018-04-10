import {ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  MatSlideToggleModule, MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CamelCasePipe} from './pipes/camel-case.pipe';
import {CpfPipe} from './pipes/cpf.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {FormAddressComponent} from './component/form-address/form-address.component';
import {ExamEvaluateComponent} from './component/exam-evaluate/exam-evaluate.component';
import {UserExamHistoryComponent} from './component/user-exam-history/user-exam-history.component';
import {ValidLicenseComponent} from './component/valid-license/valid-license.component';
import {SideBarComponent} from './component/side-bar/side-bar.component';
import {AddressComponent} from './component/address/address.component';
import {DialogComponent} from './component/dialog/dialog.component';
import {UserUpdateComponent} from './component/user-update/user-update.component';
import {UserAddressListComponent} from './component/user-address-list/user-address-list.component';
import {ReportUsersListComponent} from './component/report-users-list/report-users-list.component';
import {FlashMessageComponent} from './component/flash-message/flash-message.component';
import {ProgressLicenseComponent} from './component/progress-license/progress-license.component';
import {RoutesClientUtil} from './util/routes-client.util';
import {ExaminatorService} from './service/examinator.service';
import {GenderService} from './service/gender.service';
import {LicenseCategoryService} from './service/license-category.service';
import {ExamCategoryService} from './service/exam-category.service';
import {UserService} from './service/user.service';
import {DateConverter} from './util/date-converter';
import {UserCategoryService} from './service/user-category.service';
import {StateService} from './service/state.service';
import {ExamService} from './service/exam.service';
import {LicenseService} from './service/license.service';
import {LicenseValidatorService} from './service/license-validator.service';
import {AddressService} from './service/address.service';
import {RequirementService} from './service/requirement.service';
import {AuthClientGuard} from './guard/auth-client.guard';
import {CepService} from './service/cep.service';
import {CountryService} from './service/country.service';
import {CityService} from './service/city.service';
import {AuthAdminGuard} from './guard/auth-admin.guard';
import {AuthDelegateGuard} from './guard/auth-delegate.guard';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {AuthExaminatorGuard} from './guard/auth-examinator.guard';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CommonDirectivesModule} from './directives/common/common-directives.module';
import {AuthService} from './auth/auth.service';
import {WINDOW_PROVIDERS} from './helpers/window.helper';
import {NguCarouselModule} from '@ngu/carousel';
import {NgxMaskModule} from 'ngx-mask';
import {DataService} from './auth/data.service';
import {NgxQRCodeModule} from "ngx-qrcode2";
import {ErrorhandlerInterceptor} from './interceptor/errorhandler.interceptor';

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
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule,
    RouterModule,
    FlexLayoutModule,
    NgxDatatableModule,
    CommonDirectivesModule,
    NguCarouselModule,
    NgxMaskModule.forRoot({}),
    NgxQRCodeModule,
    MatStepperModule,
  ],
  declarations: [
    CamelCasePipe,
    CpfPipe,
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
    UserExamHistoryComponent,
    SideBarComponent,
    ValidLicenseComponent,
    ProgressLicenseComponent,
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
    RequirementService,
    LicenseService,
    AuthAdminGuard,
    AuthClientGuard,
    AuthDelegateGuard,
    AuthExaminatorGuard,
    AuthService,
    WINDOW_PROVIDERS,
    DataService,
    {provide: ErrorHandler, useClass: ErrorhandlerInterceptor},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  exports: [
    NguCarouselModule,
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
    CpfPipe,
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
    ValidLicenseComponent,
    ProgressLicenseComponent,
    FlexLayoutModule,
    NgxDatatableModule,
    MatSlideToggleModule,
    CommonDirectivesModule,
    NgxMaskModule,
    NgxQRCodeModule,
    MatStepperModule,
  ],
  entryComponents: [
    DialogComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {
}
