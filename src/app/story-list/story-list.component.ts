import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  @Input() userImg: string;
  @Input() currentUser: any;
  @Input() items: Array<any>;

  @Output() viewStory: EventEmitter<any> = new EventEmitter();
  @Output() deleteStory: EventEmitter<any> = new EventEmitter();
  @Output() editStory: EventEmitter<any> = new EventEmitter();  

  dateDisplay: string;  

  constructor() { }

  ngOnInit() {
    const now = new Date();
    this.dateDisplay = now.toLocaleDateString();
  }

  view(story: any) {
    this.viewStory.emit(story);    
  }

  delete(story: any) {
    this.deleteStory.emit(story);
  }

  edit(story: any) {
    this.editStory.emit(story);
  }

}
