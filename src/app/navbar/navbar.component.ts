import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  signout() {
    this.loginService.logout();
  }

}
