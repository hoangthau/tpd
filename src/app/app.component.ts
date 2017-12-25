import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  showNavbar: boolean = true;
  isLogined: boolean = false;
  fullName: string = '';
  username: string = '';
  showFooter: boolean = true;
  userImg: string;
  languages: Array<any> = [
    { key: 'en', value: 'English' },
    { key: 'vi', value: 'Tiếng Việt' }
  ];
  constructor(
    private router: Router,
    private loginService: LoginService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');

    const yourLang = localStorage.getItem('language');
    const browserLang = yourLang || translate.getBrowserLang();
    translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  ngOnInit() {
    const self = this;
    self.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        self.showNavbar = true;
        self.showFooter = true;
        window.scrollTo(0, 0);
        if (event.url === '/login' || event.url === '/sign-up') {
          self.showNavbar = false;
          self.showFooter = false;
        } else if (localStorage.getItem('currentUser')) {
          const currentUser = self.loginService.getCurrentUser();
          self.isLogined = true;
          self.fullName = currentUser.fullName;
          self.username = currentUser.username;
          self.userImg = this.loginService.getUserImage(currentUser.email);
        }
      }
    });
  }

  changeLanguage(value) {
    this.translate.use(value);
    localStorage.setItem('language', value);
  }
}
