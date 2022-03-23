import { Injectable } from '@angular/core';
import {BmcModule} from "./bmc.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class HypothesesDataService {

  constructor(private httpClient: HttpClient) { }

  sentHypothesis(category: string, description: string)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.httpClient.post(environment.serverAddress +"/hypothesis",{category: category, description: description})
  }

}
