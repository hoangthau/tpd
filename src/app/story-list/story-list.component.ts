import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  @Input() userImg: string;
  @Input() currentUser: any;
  @Input() items: Array<any>;

  dateDisplay: string;  

  constructor(private router: Router) { }

  ngOnInit() {
    const now = new Date();
    this.dateDisplay = now.toLocaleDateString();
  }

  viewStory(story: any) {
    const link = '/view-story/'+ story.title.toLowerCase().replace(/\s/g, '-') + '@' + story._id;
    this.router.navigate([link]);
  }

}
