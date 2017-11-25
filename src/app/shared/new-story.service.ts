import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './http-connector';

@Injectable()
export class NewStoryService {
    constructor(private httpConnector: HttpConnector) { }
   
    publishStory(data: any) {
        const url = 'api/stories';
        return this.httpConnector.post(url, data);
    }
}