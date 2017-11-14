import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  cloudName = 'tpdthau';
  unsignedUploadPreset = 'tpdthau';

  constructor() { }

  ngOnInit() {
    const self = this;
    const fileSelect = document.getElementById('fileSelect'),
      fileElem = document.getElementById('fileElem');

    fileSelect.addEventListener('click', function (e) {
      if (fileElem) {
        fileElem.click();
      }
      e.preventDefault(); // prevent navigation to '#'
    }, false);

    // ************************ Drag and drop ***************** //   
    const dropbox = document.getElementById('dropbox');
    dropbox.addEventListener('dragenter', dragenter, false);
    dropbox.addEventListener('dragover', dragover, false);
    dropbox.addEventListener('drop', drop, false);

    function drop(e) {
      e.stopPropagation();
      e.preventDefault();

      const dt = e.dataTransfer;
      const files = dt.files;

      self.handleFiles(files, true);
    }

    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    function dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  handleFiles(fileInput: any, isDrop: boolean) {
    const self = this;
    let files = [];
    if (isDrop) {
      files = fileInput;
    } else {
      files = fileInput.target.files;      
    }
    
    for (let i = 0; i < files.length; i++) {
      uploadFile(files[i]); // call the function to upload the file
    }

    function uploadFile(file) {
      const url = `https://api.cloudinary.com/v1_1/${self.cloudName}/upload`;
      const xhr = new XMLHttpRequest();
      const fd = new FormData();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      // Reset the upload progress bar
      //document.getElementById('progress').style.width = 0;

      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener('progress', function (e) {
        const progress = Math.round((e.loaded * 100.0) / e.total);
        document.getElementById('progress').style.width = progress + '%';

        console.log(`fileuploadprogress data.loaded: ${e.loaded},
        data.total: ${e.total}`);
      });

      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // File uploaded successfully
          const response = JSON.parse(xhr.responseText);
          // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
          const url2 = response.secure_url;
          // Create a thumbnail of the uploaded image, with 150px width
          const tokens = url2.split('/');
          tokens.splice(-2, 0, 'w_150,c_scale');
          const img = new Image(); // HTML5 Constructor
          img.src = tokens.join('/');
          img.alt = response.public_id;
          document.getElementById('gallery').appendChild(img);
        }
      };

      fd.append('upload_preset', self.unsignedUploadPreset);
      fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
      fd.append('file', file);
      xhr.send(fd);
    }
  }
}
