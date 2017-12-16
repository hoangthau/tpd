import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnMoreComponent } from './containers/index';

const routes: Routes = [{ path: '', component: LearnMoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnMoreRoutes {}
