import { Component, OnInit } from '@angular/core';

import { SignupService } from '../shared/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  signupSuccess: boolean = false;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  register() {
    const data = {
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
      joinDate: new Date().getTime()
    };

    this.signupService.register(data).subscribe(() => {
      this.signupSuccess = true;
    });
  }

  isValid() {
    return this.fullName && this.email && this.username &&
      this.password && this.password === this.confirmPassword;
  }

}
