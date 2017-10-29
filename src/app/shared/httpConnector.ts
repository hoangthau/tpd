import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpConnector {

    constructor(private http: Http) { }

    public get(url: string, extractData?: any): Observable<any> {
        return this.http.get(this.handleUrl(url))
            .map(extractData ? extractData : this.extractData)
            .catch(this.handleError);
    }

    public post(url: string, body: any, options?: any, extractData?: any): Observable<any> {
        const headers = new Headers(options || { 'content-type': 'application/json' });
        const _options = new RequestOptions({ headers: headers });
        return this.http.post(this.handleUrl(url), body, _options)
            .map(extractData ? extractData : this.extractData)
            .catch(this.handleError);
    }

    public delete(url: string) {
        return this.http.delete(this.handleUrl(url))
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleUrl(url: string) {
        return url;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';           
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}