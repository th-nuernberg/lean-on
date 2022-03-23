import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "../modules/shared/http-interceptor.service";
import {LoginModule} from "../modules/login/login.module";
import {SharedModule} from "../modules/shared/shared.module";
import {RoutingModule} from "../modules/routing/routing.module";
import {HeaderModule} from "../modules/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TeamOverviewModule} from "../modules/teams-overview/team-overview.module";
import {BmcModule} from "../modules/bmc/bmc.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    SharedModule,
    RoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    TeamOverviewModule,
    BmcModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
