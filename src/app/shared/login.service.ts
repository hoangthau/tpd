import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { HttpConnector } from './httpConnector';

@Injectable()
export class LoginService {
    constructor(private httpConnector: HttpConnector, private router: Router) { }

    login(data: any) {
        this.getUserList().subscribe((userList: any) => {
            const user = this.getUserByUserName(userList, data.username);
            console.log(user);
            if (user && user.password === data.password) {
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, id: user._id }));
                this.router.navigate(['/']);
            }
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
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