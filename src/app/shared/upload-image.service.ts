import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './httpConnector';

@Injectable()
export class UploadImageService {
    constructor(private httpConnector: HttpConnector) { }

    upload(file: any) {
        const url = 'https://api.cloudinary.com/v1_1/tpdthau/upload';
        const fd = new FormData();
        fd.append('upload_preset', 'tpdthau');
        fd.append('tags', 'browser_upload');
        fd.append('file', file);
        return this.httpConnector.post(url, fd, { 'X-Requested-With': 'XMLHttpRequest' });
    }    

}