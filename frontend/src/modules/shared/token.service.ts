import { Injectable } from '@angular/core';
import jwtDecode from "jwt-decode";
import { Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class TokenService{

  constructor(private router: Router) { }

  storeToken(token: string): void{

    window.localStorage.setItem("token", token)

  }

  getToken() : string| boolean{
    let token = window.localStorage.getItem("token")
    if(token)
    {return token}
    console.log("no Token set")
    return false
  }

  getDecodedToken(){
    let token = this.getToken()
    if(token) {
      let decodedToken = jwtDecode(token as string)
      return decodedToken
    }
    return false
  }
  
}
