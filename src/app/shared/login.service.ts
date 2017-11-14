import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HttpConnector } from './httpConnector';

import * as md5 from 'md5';

@Injectable()
export class LoginService {
    currentUser: any = {
        id: '',
        fullName: 'Thau Nguyen',
        username: '',
        email: ''
    };

    constructor(private httpConnector: HttpConnector, private router: Router) { }

    login(data: any) {
        const url = 'api/login';
        return this.httpConnector.post(url, data);
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    setCurrentUser(user: any) {
        this.currentUser = user;
    }

    getCurrentUser() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = Object.assign(this.currentUser, user);
        return  this.currentUser;
    }

    getUserImage(email) {
        return 'https://www.gravatar.com/avatar/' + md5(email) + '?s=200';
    }

    getUserList() {
        const url = 'api/users';
        return this.httpConnector.get(url);
    }

    getUserById(id) {
        const url = 'api/user/'+ id;
        return this.httpConnector.get(url);
    }

    getUserByUserName(userList, username) {
        for (let i = 0, len = userList.length; i < len; i++) {
            if (userList[i].username === username) {
                return userList[i];
            }
        }
        return null;
    }

}