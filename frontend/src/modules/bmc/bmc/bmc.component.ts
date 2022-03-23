import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../shared/token.service";
import {HypothesesApiService} from "../hypotheses-api.service";
import {MatDialog} from "@angular/material/dialog";
import {TeamDialogComponent} from "../../teams-overview/team-dialog/team-dialog.component";
import {NewHypothesisDialogComponent} from "../new-hypothesis-dialog/new-hypothesis-dialog.component";

@Component({
  selector: 'app-bmc',
  templateUrl: './bmc.component.html',
  styleUrls: ['./bmc.component.css'],
  providers: [HypothesesApiService]
})
export class BMCComponent implements OnInit {

  constructor(private tokenService: TokenService, private hypothesesApi: HypothesesApiService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openHypoDialog() {

  }

  openEvidenceDialog() {
    const dialogRef =
      this.dialog.open(NewHypothesisDialogComponent, {
        width: "800px"
      })

    dialogRef.afterClosed().subscribe(result => {

    })
  }
}
