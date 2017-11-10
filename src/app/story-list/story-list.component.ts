import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  @Input() userImg: string;
  @Input() currentUser: any;
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
