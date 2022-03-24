import {Injectable} from '@angular/core';
import {BmcModule} from "./bmc.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {lastValueFrom} from "rxjs";

@Injectable()
export class HypothesesDataService {

  constructor(private httpClient: HttpClient) {
  }

  async sentHypothesis(category: string, description: string) {

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let body = {category: category, description: description}
    let request = await this.httpClient.post(environment.serverAddress + "/hypothesis", body,{headers: headers})

    await lastValueFrom(request).catch(reason => {
      console.log({error: true, statuscode: reason["status"], statusText: reason["statusText"]})
      return false
    })


  }

}
