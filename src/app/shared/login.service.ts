import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { HttpConnector } from './httpConnector';

@Injectable()
export class LoginService {
    currentUser: any = {
        id: '',
        fullName: '',
        username: '',
        email: ''
    };

    constructor(private httpConnector: HttpConnector, private router: Router) { }

    login(data: any) {
        this.getUserList().subscribe((userList: any) => {
            const user = this.getUserByUserName(userList, data.username);
            console.log(user);
            if (user && user.password === data.password) {
                const link = '/user/' + user.username;
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, fullName: user.fullName, email: user.email, id: user._id }));
                this.currentUser = user;
                this.router.navigate([link]);
            }
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    getCurrentUser() {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = Object.assign(this.currentUser, user);
        return  this.currentUser;
    }

    getUserList() {
        const url = 'api/users';
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