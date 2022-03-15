import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOvierewComponent } from './team-ovierew/team-ovierew.component';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    TeamOvierewComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class TeamOveriewModule { }
