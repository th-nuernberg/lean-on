import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTokenComponent } from './check-token/check-token.component';
import { NoLoginComponent } from './no-login/no-login.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {LoginRouting} from "./routing/login-routing";
import {LoginService} from "./login.service";



@NgModule({
  declarations: [

    CheckTokenComponent,
     NoLoginComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    CheckTokenComponent,
    NoLoginComponent,
  ],


})
export class LoginModule { }
