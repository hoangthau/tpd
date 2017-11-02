import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  showNavbar: boolean = true;
  isLogined: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const self = this;
    self.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(event);
          self.showNavbar = true;
          if (event.url === '/login' || event.url === '/sign-up' ) {
            self.showNavbar = false;
          } else if (event.url.indexOf('/user/') >= 0 && localStorage.getItem('currentUser')) {
            self.isLogined = true;
          } else {
            self.isLogined = false;
          }
        }
      });
  }

}
