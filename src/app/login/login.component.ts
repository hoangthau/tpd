import { Component, OnInit } from '@angular/core';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.loginService.login(data);
  }

}
