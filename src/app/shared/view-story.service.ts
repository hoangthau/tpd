import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './http-connector';

@Injectable()
export class ViewStoryService {
    constructor(private httpConnector: HttpConnector) { }
   
    getStory(id) {
        const url = 'api/story/' + id;
        return this.httpConnector.get(url);
    }
}