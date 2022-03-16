import { Injectable } from '@angular/core';
import {TeamOverviewModule} from "./team-overview.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable(

)
export class TeamDataService {

  constructor(private httpClient: HttpClient) { }

  async sentTeam(teamName: string, users: [{firstname: string, lastname: string, email: string}])
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    const body = {teamName : teamName ,users: users}
    let request = this.httpClient.post('http://localhost:3000/team', body, {headers: headers} )

    await lastValueFrom(request).catch(reason => {
     return {error: true, statuscode: reason["status"], statusText: reason["statusText"]}
    })

    return await lastValueFrom(request)
  }

  async getTeams()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    let request = this.httpClient.get('http://localhost:3000/teams', {headers: headers})
    await lastValueFrom(request).catch(reason => {
      return {error: true, statuscode: reason["status"], statusText: reason["statusText"]}
    })

    return await lastValueFrom(request)

  }
}
