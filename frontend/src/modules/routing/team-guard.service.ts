import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenService} from "../shared/token.service";
import {Observable} from "rxjs";
import {AdminService} from "../shared/admin.service";

@Injectable({
  providedIn: 'root'
})
export class TeamGuardService{

  constructor(private adminService: AdminService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    let admin = await this.adminService.checkWithServerForAdmin()

    // @ts-ignore
    if(admin["admin"] === "true")
    {
      return true;
    }
    else
    {
      return false;
    }
  }




}
