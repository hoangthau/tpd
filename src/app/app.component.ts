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

  constructor(private router: Router) { }

  ngOnInit() {
    const self = this;
    self.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          self.showNavbar = true;
          if (event.url === '/login') {
            self.showNavbar = false;
          }
        }
      });
  }

}
