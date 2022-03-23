import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminService} from "./admin.service";
import {HttpInterceptorService} from "./http-interceptor.service";
import {TokenService} from "./token.service";
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [

    PageNotFoundComponent,
     ConfirmationDialogComponent,
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCardModule
    ],
  exports: [
    PageNotFoundComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
