import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BMCComponent } from './bmc/bmc.component';
import { BmcCategoryComponent } from './bmc-category/bmc-category.component';
import { HypothesisCardComponent } from './hypothesis-card/hypothesis-card.component';
import { NewHypothesisDialogComponent } from './new-hypothesis-dialog/new-hypothesis-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    BMCComponent,
    BmcCategoryComponent,
    HypothesisCardComponent,
    NewHypothesisDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class BmcModule { }
