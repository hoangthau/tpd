import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class EditStoryService {
    constructor(private httpConnector: HttpConnector) { }
   
    updateStory(data: any, id: string) {
        const url = 'api/story/' + id;
        return this.httpConnector.put(url, data);
    }
}