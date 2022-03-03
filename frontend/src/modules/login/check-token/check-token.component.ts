import {Component, DoBootstrap, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {TokenService} from "../../shared/token.service";

@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.css'],
  providers: [LoginService]
})
export class CheckTokenComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private tokenService: TokenService) {
  }

  async ngOnInit() {

    if(this.tokenService.getToken())
    {
      this.router.navigate(["bmc"])
    }
    let response = await this.loginService.login()
    if(response === true)
    {
      this.router.navigate(["bmc"])
    }
    else {
      this.router.navigate(["no-token"], )
    }
  }


}
