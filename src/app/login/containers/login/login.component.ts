import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  msg: string = '';
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    const body = {
      username: this.username,
      password: this.password
    };
    this.loginService.login(body).subscribe((data: any) => {
      if (data.isLogined) {
        const user = data.currentUser;
        const link = '/user/' + user.username;
        localStorage.setItem(
          'currentUser',
          JSON.stringify({
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            id: user._id,
            joinDate: user.joinDate
          })
        );

        this.loginService.setCurrentUser(user);
        this.router.navigate([link]);
        return;
      } else {
        this.msg = data.message;
      }
    });
  }
}
