import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CheckTokenComponent} from "../login/check-token/check-token.component";
import {PageNotFoundComponent} from "../shared/pagenotfound/pagenotfound.component";
import {BMCComponent} from "../bmc/bmc/bmc.component";
import {NoTokenComponent} from "../login/no-token/no-token.component";
import {TokenGuardService} from "./token-guard.service";
import {TeamGuardService} from "./team-guard.service";
import {TeamOverviewComponent} from "../teams-overview/team-overview/team-overview.component";
import {AdminTeamCheckoutService} from "../shared/admin-team-checkout.service";
import {AdminCheckoutGuardService} from "./admin-checkout-guard.service";


const appRoutes: Routes = [
  {path: '', pathMatch: "full" , redirectTo: '/bmc'},
  {path: 'login/:token', component: CheckTokenComponent},
  {path: 'bmc', component: BMCComponent, canActivate: [TokenGuardService, AdminCheckoutGuardService]},
  {path: 'no-token', component: NoTokenComponent},
  {path: 'teams', component: TeamOverviewComponent, canActivate: [TokenGuardService,TeamGuardService]},

  /*
    {path: 'hypothesis/:id', component: HypothesisDetailComponent},
  */
/*
  {path: 'evidence/:id', component: EvidenceDetailComponent},
*/
/*
  {path: 'evidence', component: NewEvidenceComponent},
*/

/*
  {path: 'commit-summary', component: CommitSummaryComponent},
*/
/*
  {path: 'commit-comparison/:id/:id', component: CompareCommitComponent},
*/
/*
  {path: 'commit-comparison/:id/:id/hypothesis/:id', component: HypothesisDetailComponent},
*/
/*
  {path: 'commit-comparison/:id/:id/evidence/:id', component: EvidenceDetailComponent},
*/
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
