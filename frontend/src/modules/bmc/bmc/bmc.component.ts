import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../shared/token.service";
import {HypothesesApiService} from "../hypotheses-api.service";
import {MatDialog} from "@angular/material/dialog";

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
}
