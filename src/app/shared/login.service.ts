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
        return Observable.create((observer) => {
            this.getUserList().subscribe((userList: any) => {
                const user = this.getUserByUserName(userList, data.username);
                if (user && user.password === data.password) {
                    const link = '/user/' + user.username;
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, fullName: user.fullName, email: user.email, id: user._id }));
                    this.currentUser = user;
                    this.router.navigate([link]);
                    observer.next(true);
                } else {
                    observer.next(user);                    
                }
                observer.complete();
            });
        })
        
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
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