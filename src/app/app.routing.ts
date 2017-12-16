import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from './shared/auth-guard.service';
import { NewStoryComponent } from './new-story/new-story.component';
import { ViewStoryComponent } from './view-story/view-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'user/:username',
    component: UserPageComponent,
    canActivate: [AuthGuard]
  },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: 'learn-more',
    loadChildren: './learn-more/learn-more.module#LearnMoreModule'
  },
  { path: 'new-story', component: NewStoryComponent },
  { path: 'view-story/:story-id', component: ViewStoryComponent },
  {
    path: 'edit-story/:story-id',
    component: EditStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutes {}
