import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
    { path: '', component: HomePageComponent },    
    { path: 'user/:username', component: UserPageComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})

export class AppRoutes { }
