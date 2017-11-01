import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class HomePageService {
    constructor(private httpConnector: HttpConnector) { }

    getTaskList() {
        const url = 'api/tasks';
        return this.httpConnector.get(url);
    }

    saveTask(data: any) {
        const url = 'api/tasks';
        return this.httpConnector.post(url, data);
    }

    deleteTask(id: string) {
        const url = 'api/task/' + id;
        return this.httpConnector.delete(url);
    }

    getUserList() {
        const url = 'api/users';
        return this.httpConnector.get(url);
    }
}