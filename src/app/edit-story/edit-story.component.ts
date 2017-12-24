import { Component, OnInit, NgZone, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../shared/login.service';
import { EditStoryService } from '../shared/edit-story.service';
import { ViewStoryService } from '../shared/view-story.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  selectedStory: any;
  title: string;
  content: string;
  currentUser: any;
  done: boolean = true;
  allowUpdate: boolean = false;

  constructor(
    private editStoryService: EditStoryService,
    private viewStoryService: ViewStoryService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    const param = this.route.snapshot.params['story-id'];
    const id = param.split('@')[1];
    if (id) {
      this.viewStoryService.getStory(id).subscribe(data => {
        this.selectedStory = data;
        this.title = this.selectedStory.title;
        this.content = this.selectedStory.content;
      });
    }
  }

  keyupHandlerFunction(content: string) {
    this.ngZone.run(() => {
      this.content = content;
      this.allowUpdate = this.checkToUpdate();
    });
  }

  changeTitle() {
    this.allowUpdate = this.checkToUpdate();
  }

  update() {
    if (this.currentUser && this.currentUser.id) {
      const now = new Date();
      const data = {
        title: this.title,
        content: this.content,
        userId: this.selectedStory.userId,
        date: now.getTime(),
        fullName: this.selectedStory.fullName,
        email: this.selectedStory.email,
        imageUrl: this.selectedStory.imageUrl
      };

      this.done = false;
      this.updateStory(data, this.selectedStory._id);
    }
  }

  updateStory(data: any, id: string) {
    this.editStoryService.updateStory(data, id).subscribe(() => {
      const link =
        '/view-story/' +
        data.title.toLowerCase().replace(/\s/g, '-') +
        '@' +
        id;

      this.router.navigate([link]);
      this.done = true;
    });
  }

  checkToUpdate() {
    if (!!this.title && !!this.content) {
      return true;
    }
    return false;
  }
}
