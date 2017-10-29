import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

let routes: Routes =[
    {path: '', component: HomePageComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})

export class AppRoutes {}
