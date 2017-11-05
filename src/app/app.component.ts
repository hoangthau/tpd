import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    const self = this;
    self.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(event);
          self.showNavbar = true;
          self.showFooter = true;
          if (event.url === '/login' || event.url === '/sign-up' ) {
            self.showNavbar = false;
            self.showFooter = false;
          } else if (localStorage.getItem('currentUser')) {
            const currentUser = self.loginService.getCurrentUser();
            self.isLogined = true;
            self.fullName = currentUser.fullName;
            self.username = currentUser.username;
          }
        }
      });
  }

}
