import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../shared/token.service";
import {HypothesesDataService} from "../hypothesis-data.service";
import {MatDialog} from "@angular/material/dialog";
import {TeamDialogComponent} from "../../teams-overview/team-dialog/team-dialog.component";
import {NewHypothesisDialogComponent} from "../new-hypothesis-dialog/new-hypothesis-dialog.component";

@Component({
  selector: 'app-bmc',
  templateUrl: './bmc.component.html',
  styleUrls: ['./bmc.component.css'],
  providers: []
})
export class BMCComponent implements OnInit {

  hypotheses
  isLoading : boolean = true

  categories = [{text: 'Key Partners', col: '2', row: '2'},
    {text: 'Key Activities', col: '2', row: '1'},
    {text: 'Value Propositions', col: '2', row: '2'},
    {text: 'Customer Relationships', col: '2', row: '1'},
    {text: 'Customer Segments', col: '2', row: '2'},
    {text: 'Key Resources', col: '2', row: '1'},
    {text: 'Channels', col: '2', row: '1'},
    {text: 'Cost Structure', col: '5', row: '1'},
    {text: 'Revenue Streams', col: '5', row: '1'},]

  constructor(private tokenService: TokenService, private hypothesesDataService: HypothesesDataService,
              public dialog: MatDialog) {
  }

  async ngOnInit(): Promise<void> {
    this.hypotheses = await this.hypothesesDataService.getAllHypothesis()
    this.isLoading = false
  }


 openHypothesisDialog() {
    const dialogRef =
      this.dialog.open(NewHypothesisDialogComponent, {
        width: "800px"
      })

    dialogRef.afterClosed().subscribe(async (result) => {
      if(result)
      {
        this.hypotheses = await this.hypothesesDataService.getAllHypothesis()
      }

    })
  }
}
