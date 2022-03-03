import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTokenComponent } from './check-token/check-token.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {LoginService} from "./login.service";
import { NoTokenComponent } from './no-token/no-token.component';



@NgModule({
  declarations: [

    CheckTokenComponent,
     NoTokenComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    CheckTokenComponent,
    NoTokenComponent,
  ],


})
export class LoginModule { }
