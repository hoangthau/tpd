import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/auth-guard.service';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { ViewStoryComponent } from './view-story/view-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },    
    { path: 'user/:username', component: UserPageComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'learn-more', component: LearnMoreComponent },
    { path: 'new-story', component: NewStoryComponent },
    { path: 'view-story/:story-id', component: ViewStoryComponent },
    { path: 'edit-story/:story-id', component: EditStoryComponent }      
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})

export class AppRoutes { }
