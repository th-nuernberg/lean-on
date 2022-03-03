import {Injectable} from '@angular/core';
import {LoginModule} from "./login.module";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../shared/token.service";
import {AdminService} from "../shared/admin.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, lastValueFrom, throwError} from "rxjs";


@Injectable()
export class LoginService {

  constructor(private activeRoute: ActivatedRoute,
              private tokenService: TokenService,
              private adminService: AdminService,
              private router: Router,
              private httpClient: HttpClient) {
  }

  async login() {
    let queryToken = this.activeRoute.snapshot.params["token"]
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});


    let jwtToken = await this.getJWToken(headers, queryToken)
    console.log(jwtToken)

    if (jwtToken.hasOwnProperty("accessToken")) {
      // @ts-ignore
      this.tokenService.storeToken(jwtToken["accessToken"])
      return true
    }
    else {
      return jwtToken
    }

  }

  private async getJWToken(headers: HttpHeaders, queryToken: string) {
    let post = this.httpClient.post("http://localhost:3000/login", {"token": queryToken}, {headers: headers})
    let jwtResponse = await lastValueFrom(post).catch((reason => {
      return {error: true, statuscode: reason["status"], statusText: reason["statusText"]}
    }))
    return jwtResponse
  }


}
