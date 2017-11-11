import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewStoryService } from '../shared/new-story.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
  title: string;
  content: string;
  currentUser: any;

  constructor(
    private newStoryService: NewStoryService, 
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
  }

  keyupHandlerFunction(content: string) {
    this.content = content;
  }

  publish() {
    if (this.currentUser && this.currentUser.id) {
      const now = new Date();
      const data = {
        title: this.title,
        content: this.content,
        userId: this.currentUser.id,
        date: now.getTime()
      };
      this.newStoryService.publishStory(data).subscribe(() => {
        const link = '/user/' + this.currentUser.username;
        this.router.navigate([link]);
      });
    }
  }

}
