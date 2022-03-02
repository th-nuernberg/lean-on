import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminService} from "./admin.service";
import {HttpInterceptorService} from "./http-interceptor.service";
import {TokenService} from "./token.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
