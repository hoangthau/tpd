import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class SignupService {
    constructor(private httpConnector: HttpConnector) { }

    register(data: any) {
        const url = 'api/users';
        return this.httpConnector.post(url, data);
    }    

}