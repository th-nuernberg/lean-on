import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TeamDialogComponent} from "../team-dialog/team-dialog.component";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {TeamDataService} from "../team-data.service";
import {TeamInfoDialogComponent} from "../team-info-dialog/team-info-dialog.component";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  displayedColumns = ["#", "Team-Name", "Actions"]
  tableDataSource: any
  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;


  constructor(private dialog: MatDialog, public teamDataService: TeamDataService) {
  }

  async ngOnInit() {
    let teamData = await this.teamDataService.getTeams()
    this.tableDataSource = teamData
  }


  async openNewTeamDialog() {

    const dialogRef =
      this.dialog.open(TeamDialogComponent, {
        width: "800px"
      })

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        this.tableDataSource = await this.teamDataService.getTeams()
        this.table.renderRows()
      }
    })

  }

  async deleteTeam(id: number) {

    await this.teamDataService.deleteTeam(id)
    this.tableDataSource = await this.teamDataService.getTeams()
    this.table.renderRows()

  }

  openTeamInfoDialog(userData) {
    const dialogRef =
      this.dialog.open(TeamInfoDialogComponent, {
        width: "800px",
        data: userData
      })

  }
}
