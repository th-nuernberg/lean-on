import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminService} from "./admin.service";
import {HttpInterceptorService} from "./http-interceptor.service";
import {TokenService} from "./token.service";
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [

    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class SharedModule { }
