import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckTokenComponent} from "../modules/login/check-token/check-token.component";

const routes: Routes = [{
  path: '', component: CheckTokenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
