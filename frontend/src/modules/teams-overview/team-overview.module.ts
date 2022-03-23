import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {TeamDataService} from "./team-data.service";
import {SharedModule} from "../shared/shared.module";
import { TeamInfoDialogComponent } from './team-info-dialog/team-info-dialog.component';


@NgModule({
  declarations: [
    TeamOverviewComponent,
    TeamDialogComponent,
    TeamInfoDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    TeamDataService
  ]

})
export class TeamOverviewModule { }
