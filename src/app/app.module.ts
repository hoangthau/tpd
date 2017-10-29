import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
