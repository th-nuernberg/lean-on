import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TeamDialogComponent} from "../team-dialog/team-dialog.component";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {



  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }



  openNewTeamDialog() {

    const dialogRef=
      this.dialog.open(TeamDialogComponent,{
        width: "800px"

  })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog works")
      console.log(result)
    })

  }
}
