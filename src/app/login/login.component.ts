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
  msg: string = '';
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.loginService.login(data).subscribe((user) => {
      if (user === true) {
        return;
      }
      if (user) {
        this.msg = 'Incorrect password !';
      } else {
        this.msg = 'Incorrect username !';
      }
    });
  }

}
