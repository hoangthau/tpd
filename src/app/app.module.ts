import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListComponent } from './list/list.component';

import { HttpConnector } from './shared/httpConnector';
import { HomePageService } from './shared/home-page.service';
import { UserPageService } from './shared/user-page.service';
import { LoginService } from './shared/login.service';
import { SignupService } from './shared/sign-up.service';
import { AuthGuard } from './shared/auth-guard.service';
import { UserPageComponent } from './user-page/user-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignUpComponent,
    ListComponent,
    UserPageComponent,
    NavbarComponent,
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [HttpConnector, HomePageService, UserPageService, LoginService, SignupService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
