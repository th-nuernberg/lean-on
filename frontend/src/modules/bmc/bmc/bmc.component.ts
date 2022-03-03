import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../shared/token.service";

@Component({
  selector: 'app-bmc',
  templateUrl: './bmc.component.html',
  styleUrls: ['./bmc.component.css']
})
export class BMCComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
