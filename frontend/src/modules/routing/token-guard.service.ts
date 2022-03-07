import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenService} from "../shared/token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService implements CanActivate{

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.tokenService.getToken())
    {return true}
    else
    {
      this.router.navigate(["no-token"])
      return false
    }
  }


}
