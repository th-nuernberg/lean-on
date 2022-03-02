import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckTokenComponent} from "../modules/login/check-token/check-token.component";
import {LoginModule} from "../modules/login/login.module";
import {NoLoginComponent} from "../modules/login/no-login/no-login.component";

const routes: Routes = [
  {path: '', component: NoLoginComponent},
  {path: 'login/:token', component: CheckTokenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
