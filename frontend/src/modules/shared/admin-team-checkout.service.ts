import { Injectable } from '@angular/core';

const defaultValue = "default"

@Injectable({
  providedIn: 'root'
})
export class AdminTeamCheckoutService {

  private teamName :string = defaultValue

  constructor() {

  }

  //Returns defensive Copy
  getLoggedInTeamName(){
    return (' ' + this.teamName).slice(1)
  }

  setLoggedInTeamName(teamName: string){
    this.teamName = teamName
  }

  isLoggedIn(){
    return this.teamName !== defaultValue
  }
}
