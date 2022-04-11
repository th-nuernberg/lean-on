import {Injectable} from '@angular/core';
import {BmcModule} from "./bmc.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {last, lastValueFrom, map} from "rxjs";

@Injectable()
export class HypothesesDataService {


  constructor(private httpClient: HttpClient) {
  }

  async sentHypothesis(category: string, description: string) {

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let body = {category: category, description: description}
    let request = await this.httpClient.post(environment.serverAddress + "/hypothesis", body, {headers: headers})

    await lastValueFrom(request).catch(reason => {
      console.log({error: true, statuscode: reason["status"], statusText: reason["statusText"]})
      return false
    })


  }

  async getAllHypothesis() {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let request = this.httpClient.get(environment.serverAddress + "/hypotheses", {headers: headers})


    let hypotheses = await lastValueFrom(request).catch(reason => {
      console.log({error: true, statuscode: reason["status"], statusText: reason["statusText"]})
      return false
    })

    let sortedHypotheses = this.sortHypothesesIntoCategories(hypotheses)


    return sortedHypotheses
  }


  private sortHypothesesIntoCategories(hypotheses)
  {
    let hypothesesSplit = {
      "Value Propositions": [],
      "Key Partners": [],
      "Key Resources": [],
      "Key Activities": [],
      "Customer Relationships": [],
      "Customer Segments": [],
      "Channels": [],
      "Cost Structure": [],
      "Revenue Streams": [],
    }

    for(let hypo of hypotheses["hypotheses"])
    {
      console.log(hypothesesSplit)
      if(hypo.category)
      {
        hypothesesSplit[hypo.category].push(hypo)
      }
    }
    return hypothesesSplit


  }


}
