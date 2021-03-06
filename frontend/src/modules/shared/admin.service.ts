import { Injectable } from '@angular/core';
import {SharedModule} from "./shared.module";
import {TokenService} from "./token.service";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private tokenService: TokenService,
              private httpClient : HttpClient) { }

  async checkWithServerForAdmin(){

    let token = this.tokenService.getToken()

    let observable = this.httpClient.get(environment.serverAddress+"/admin")
    let response = await lastValueFrom(observable)

    return response

  }

  checkJWTokenIfAdmin(){

    let decodedToken = this.tokenService.getDecodedToken()
    // @ts-ignore
    return decodedToken["admin"] === "true"

  }
}
