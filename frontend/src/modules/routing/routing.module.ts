import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CheckTokenComponent} from "../login/check-token/check-token.component";
import {PageNotFoundComponent} from "../shared/pagenotfound/pagenotfound.component";
import {BMCComponent} from "../bmc/bmc/bmc.component";
import {NoTokenComponent} from "../login/no-token/no-token.component";


const appRoutes: Routes = [
  {path: '', component: CheckTokenComponent},
  {path: 'login/:token', component: CheckTokenComponent},
  {path: 'bmc', component: BMCComponent},
  {path: 'no-token', component: NoTokenComponent},

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
  {path: 'team-overview', component: TeamOverviewComponent},
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
