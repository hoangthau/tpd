import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { NewStoryService } from '../shared/new-story.service';
import { LoginService } from '../shared/login.service';
import { UploadImageService } from '../shared/upload-image.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
  title: string;
  content: string;
  currentUser: any;
  image: any;
  done: boolean = true;
  allowPublish: boolean = false;

  constructor(
    private newStoryService: NewStoryService,
    private loginService: LoginService,
    private router: Router,
    private uploadImageService: UploadImageService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
  }

  keyupHandlerFunction(content: string) {
    this.ngZone.run(() => {
      this.content = content;
      this.allowPublish = this.checkToPublish();
    });
  }

  changeTitle() {
    this.allowPublish = this.checkToPublish();
  }

  publish() {
    if (this.currentUser && this.currentUser.id) {
      const now = new Date();
      const data = {
        title: this.title,
        content: this.content,
        userId: this.currentUser.id,
        date: now.getTime(),
        fullName: this.currentUser.fullName,
        email: this.currentUser.email,
        imageUrl: ''
      };

      this.done = false;
      if (this.image) {
        this.uploadImageService.upload(this.image).subscribe(response => {
          data.imageUrl = response.url;
          this.publishStory(data);
        });
      } else {
        this.publishStory(data);
      }
    }
  }

  publishStory(data: any) {
    this.newStoryService.publishStory(data).subscribe((res: any) => {
      const story = res.story;
      const link =
        '/view-story/' +
        story.title.toLowerCase().replace(/\s/g, '-') +
        '@' +
        story._id;
      this.router.navigate([link]);
      this.done = true;
    });
  }

  changeFile(file: any) {
    this.image = file;
  }

  checkToPublish() {
    if (!!this.title && !!this.content) {
      return true;
    }
    return false;
  }
}
