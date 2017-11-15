import { Component, OnInit } from '@angular/core';
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

  constructor(
    private newStoryService: NewStoryService, 
    private loginService: LoginService,
    private router: Router,
    private uploadImageService: UploadImageService ) { }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
  }

  keyupHandlerFunction(content: string) {
    this.content = content;
  }

  publish() {
    if (this.currentUser && this.currentUser.id && this.image) {
      this.uploadImageService.upload(this.image).subscribe((response) => {
        const now = new Date();
        const data = {
          title: this.title,
          content: this.content,
          userId: this.currentUser.id,
          date: now.getTime(),
          fullName: this.currentUser.fullName,
          email: this.currentUser.email,
          imageUrl: response.url
        };
        this.newStoryService.publishStory(data).subscribe(() => {
          const link = '/user/' + this.currentUser.username;
          this.router.navigate([link]);
        });
      });      
    }
  }

  changeFile(file: any) {
    this.image = file;
  }

}
