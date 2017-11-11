import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() show: boolean = true;
  @Input() logined: boolean = true;
  @Input() fullName: string = '';
  @Input() username: string = '';  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  signout() {
    this.loginService.logout();
  }

  goToUserPage(){
    this.router.navigate(['/user/' + this.username ]);
  }

}
