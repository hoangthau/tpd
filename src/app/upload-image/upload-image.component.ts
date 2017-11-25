import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

import { HttpConnector } from '../shared/http-connector';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {  
  @Output() changeFile: EventEmitter<any> = new EventEmitter();

  constructor(private httpConnector: HttpConnector) { }

  ngOnInit() {
    const self = this;
    const fileSelect = document.getElementById('fileSelect'),
      fileElem = document.getElementById('fileElem');

    fileSelect.addEventListener('click', function (e) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault();
    }, false);
  }

  handleFiles(fileInput: any) {
    const file = fileInput.target.files[0];
    if (file) {
      const img = new Image();
      const galleryElem = document.getElementById('gallery');
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      img.width = 200;
      img.height = 100;
      galleryElem.innerHTML = null;
      galleryElem.appendChild(img);
      this.changeFile.emit(file);
    }

  }
}
