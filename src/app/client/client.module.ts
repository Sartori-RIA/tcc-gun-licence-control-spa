import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientLicenceComponent } from './client-licence/client-licence.component';
import { ClientExamsComponent } from './client-exams/client-exams.component';
import { ClientRoutingModule } from "./client.routing";
import { ClientSidebarComponent } from './client-sidebar/client-sidebar.component';
import { MenuComponent } from './client-sidebar/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ClientRoutingModule
  ],
  declarations: [
  ClientHomeComponent,
  ClientRegisterComponent,
  ClientProfileComponent,
  ClientLicenceComponent,
  ClientExamsComponent,
  ClientSidebarComponent,
  MenuComponent
  ]
})
export class ClientModule { }
