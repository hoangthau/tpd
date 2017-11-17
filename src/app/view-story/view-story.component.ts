import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private viewStoryService: ViewStoryService, 
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit() {
    this.story = {
      '_id': '5a056f41734d1d68d42ce314',
      'title': 'The first story',
      'content': '<p>The simple content</p>',
      'userId': '59f97b8ef36d28236309ab9b',
      'dateDisplay': '11/11/2017'
    };

    const param = this.route.snapshot.params['story-id'];
    const id = param.split('@')[1];
    if (id) {
      this.viewStoryService.getStory(id).subscribe((data) => {
        this.story = data;
        this.story.dateDisplay = new Date(data.date).toLocaleDateString();
        this.story.userImg = this.loginService.getUserImage(this.story.email);
      });
    }
  }

}
