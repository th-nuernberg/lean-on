import {Component, DoBootstrap, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {ActivatedRoute, Router} from "@angular/router";
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
              private tokenService: TokenService,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {

    await this.initialRouting()
  }

  async initialRouting()
  {
    let response = await this.loginService.login()
    if(response === true)
    {
      this.router.navigate(["bmc"])
      return;
    }
    else {
      this.tokenService.deleteToken()
      this.router.navigate(["no-token"])
      return;
    }
  }


}
