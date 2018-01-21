import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

import { HttpConnector } from '../shared/http-connector';

import Cropper from 'cropperjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @Input() allowCrop: boolean = false;
  @Input() options: any = {};

  @Output() changeFile: EventEmitter<any> = new EventEmitter();

  constructor(private httpConnector: HttpConnector) {}

  ngOnInit() {
    const self = this;
    const fileSelect = document.getElementById('fileSelect'),
      fileElem = document.getElementById('fileElem');

    fileSelect.addEventListener(
      'click',
      function(e) {
        if (fileElem) {
          fileElem.click();
        }
        e.preventDefault();
      },
      false
    );
  }

  handleFiles(fileInput: any) {
    const file = fileInput.target.files[0];
    if (file) {
      const img = new Image();
      const galleryElem = document.querySelector('#gallery') as any;
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      img.id = 'image';
      galleryElem.innerHTML = null;
      galleryElem.appendChild(img);
      if (this.allowCrop) {
        const image = document.querySelector('#image') as any;
        image.style.maxWidth = '100%';
        galleryElem.style.height = '300px';
        this.changeFile.emit(file);
        this.setCropper(img);
      } else {
        img.width = this.options.previewImgWidth || 200;
        img.height = this.options.previewImgHeight || 100;
        this.changeFile.emit(file);
      }
    }
  }

  private setCropper(image) {
    const self = this;
    const cropper = new Cropper(image, {
      cropend: () => {
        cropper.getCroppedCanvas().toBlob(blob => {
          self.changeFile.emit(blob);
        });
      }
    });
  }
}
