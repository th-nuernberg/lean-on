import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BMCComponent } from './bmc/bmc.component';
import { BmcCategoryComponent } from './bmc-category/bmc-category.component';
import { HypothesisCardComponent } from './hypothesis-card/hypothesis-card.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { NewHypothesisDialogComponent } from './new-hypothesis-dialog/new-hypothesis-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {HypothesesDataService} from "./hypothesis-data.service";
import {HypoRatingCalculatorService} from "./hypo-rating-calculator.service";



@NgModule({
  declarations: [
    BMCComponent,
    BmcCategoryComponent,
    HypothesisCardComponent,
    NewHypothesisDialogComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [
    HypothesesDataService,
    HypoRatingCalculatorService
  ]
})
export class BmcModule { }
