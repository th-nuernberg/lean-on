import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "../modules/shared/http-interceptor.service";
import {LoginModule} from "../modules/login/login.module";
import {SharedModule} from "../modules/shared/shared.module";
import {RoutingModule} from "../modules/routing/routing.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    SharedModule,
    RoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
