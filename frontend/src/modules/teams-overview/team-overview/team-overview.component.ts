import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TeamDialogComponent} from "../team-dialog/team-dialog.component";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {TeamDataService} from "../team-data.service";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  displayedColumns = ["#","Team-Name", "Actions"]
  tableDataSource = new MatTableDataSource([{"id": 1,"teamName": "sony"}])


  constructor(private dialog: MatDialog, public teamDataService: TeamDataService) { }

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

  openTeamDialog() {

  }

  async deleteTeam(id: number) {

    await this.teamDataService.deleteTeam(id)

  }
}
