import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class HomePageService {
    constructor(private httpConnector: HttpConnector){}

    getTaskList(){
        var url = 'api/tasks';
        return this.httpConnector.get(url);
    }

    saveTask(data: any){
        var url = 'api/tasks';
        return this.httpConnector.post(url, data);
    }

    deleteTask(id: string){
        var url = 'api/task/' + id;
        return this.httpConnector.delete(url);
    }
}