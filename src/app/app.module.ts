import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { NewStoryService } from './shared/new-story.service';
import { ViewStoryService } from './shared/view-story.service';
import { UploadImageService } from './shared/upload-image.service';
import { EditStoryService } from './shared/edit-story.service';

import { UserPageComponent } from './user-page/user-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { SimpleTinyComponent } from './simple-tiny/simple-tiny.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { ViewStoryComponent } from './view-story/view-story.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { EditStoryComponent } from './edit-story/edit-story.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignUpComponent,
    ListComponent,
    UserPageComponent,
    NavbarComponent,
    LearnMoreComponent,
    SimpleTinyComponent,
    NewStoryComponent,
    StoryListComponent,
    ViewStoryComponent,
    UploadImageComponent,
    SpinnerComponent,
    ModalComponent,
    EditStoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    HttpConnector, 
    HomePageService, 
    UserPageService, 
    LoginService, 
    SignupService, 
    AuthGuard, 
    NewStoryService,
    ViewStoryService,
    UploadImageService,
    EditStoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
