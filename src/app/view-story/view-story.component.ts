import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ViewStoryService } from '../shared/view-story.service';
import { LoginService } from '../shared/login.service';

import * as md5 from 'md5';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit {
  story: any;
  allowEdit: boolean = false;

  constructor(
    private viewStoryService: ViewStoryService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.story = {
      _id: '5a056f41734d1d68d42ce314',
      title: 'The first story',
      content: '<p>The simple content</p>',
      userId: '59f97b8ef36d28236309ab9b',
      dateDisplay: '11/11/2017'
    };

    const currentUser = this.loginService.getCurrentUser();
    const param = this.route.snapshot.params['story-id'];
    const id = param.split('@')[1];
    
    if (id) {
      this.viewStoryService.getStory(id).subscribe(data => {
        this.story = data;
        this.story.dateDisplay = new Date(data.date).toLocaleDateString();
        this.story.userImg = this.loginService.getUserImage(this.story.email);
        this.allowEdit = this.story.userId === currentUser.id;
      });
    }
  }

  edit(story: any) {
    const link =
      '/edit-story/' +
      story.title.toLowerCase().replace(/\s/g, '-') +
      '@' +
      story._id;
    this.router.navigate([link]);
  }
}
