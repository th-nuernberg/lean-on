import { Injectable } from '@angular/core';
import {TeamOverviewModule} from "./team-overview.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable(

)
export class TeamDataService {

  constructor(private httpClient: HttpClient) { }

  async sentTeam(teamName: string, users: [{firstname: string, lastname: string, email: string}])
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    const body = {teamName : teamName ,users: users}

    let request = this.httpClient.post(environment.serverAddress+'/team', body, {headers: headers, observe:'response'} )
    await lastValueFrom(request).catch(reason => {
      if(reason["status"] !== 200)
      {
        console.log()
        return {error: true, statuscode: reason["status"], statusText: reason["statusText"]}
      }
      return true

      })


  }

  async getTeams()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let request = this.httpClient.get(environment.serverAddress+'/teams', {headers: headers})
    return await lastValueFrom(request).catch(reason => {
        console.log({error: true, statuscode: reason["status"], statusText: reason["statusText"]})
      return new Array<{}>()
    })

  }

  async deleteTeam(id: number)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let request = this.httpClient.delete(environment.serverAddress+'/teams/'+id,  {headers: headers})
    await lastValueFrom(request).catch(reason => {
      return {error: true, statuscode: reason["status"], statusText: reason["statusText"]}
    })

  }
}
