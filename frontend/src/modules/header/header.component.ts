import { Component, OnInit } from '@angular/core';
import {TokenService} from "../shared/token.service";
import {AdminService} from "../shared/admin.service";
import {AdminTeamCheckoutService} from "../shared/admin-team-checkout.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public adminService: AdminService, public adminTeamLoggedIn: AdminTeamCheckoutService) { }

  ngOnInit(): void {
  }

}
