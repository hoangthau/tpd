import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class UserPageService {
    constructor(private httpConnector: HttpConnector) { }

    getTaskList(userId) {
        const url = 'api/tasks?userId=' + userId;
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

    getStoryList(userId) {
        const url = 'api/stories?userId=' + userId;
        return this.httpConnector.get(url);
    }

    getAllStoryList(){
        const url = 'api/stories';
        return this.httpConnector.get(url);
    }

    deleteStory(id: string) {
        const url = 'api/story/' + id;
        return this.httpConnector.delete(url);
    }
}