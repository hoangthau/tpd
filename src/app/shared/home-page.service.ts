import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class HomePageService {
    constructor(private httpConnector: HttpConnector){}
    public getTaskList(){
        var url = 'api/tasks';
        return this.httpConnector.get(url);
    }
}