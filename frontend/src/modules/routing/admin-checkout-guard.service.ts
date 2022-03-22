import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AdminTeamCheckoutService} from "../shared/admin-team-checkout.service";
import {AdminService} from "../shared/admin.service";

@Injectable({
  providedIn: 'root'
})
export class AdminCheckoutGuardService implements CanActivate {

  constructor(private adminTeamCheckout: AdminTeamCheckoutService, private router: Router, private adminService: AdminService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.adminService.checkJWTokenIfAdmin()) {
      if (this.adminTeamCheckout.isLoggedIn())
        return true
      else
        this.router.navigate(["teams"])
      return false
    }
    else
    {
      return true
    }
  }


}
