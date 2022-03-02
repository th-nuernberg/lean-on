import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {CheckTokenComponent} from "../check-token/check-token.component";

const routes: Routes = [{
  path: 'check', component: CheckTokenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouting { }
