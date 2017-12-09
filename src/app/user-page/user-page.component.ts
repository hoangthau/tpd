import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPageService } from '../shared/user-page.service';
import { LoginService } from '../shared/login.service';
import { CommonService } from '../shared/common.service';

import * as md5 from 'md5';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  showCreateInput: boolean = false;
  taskTitle: string;
  userList: Array<any>;
  currentUser: any;
  userImg: string;
  joinDate: string;
  taskList: Array<any> = [];
  storyList: Array<any> = [];

  constructor(
    private userPageService: UserPageService,
    private loginService: LoginService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    this.userImg = this.loginService.getUserImage(this.currentUser.email);
    this.getTaskList();
    this.getStoryList();
    if (this.currentUser && this.currentUser.joinDate) {
      const date = new Date(this.currentUser.joinDate);
      this.joinDate =
        this.commonService.getMonthLabel(date) + ' ' + date.getFullYear();
    }
  }

  getTaskList() {
    this.userPageService.getTaskList(this.currentUser.id).subscribe(data => {
      this.taskList = data;
      this.taskList.sort((a, b) => {
        return a.sortOrder - b.sortOrder;
      });
    });
  }

  getStoryList() {
    this.userPageService.getStoryList(this.currentUser.id).subscribe(data => {
      this.storyList = data.map(d => {
        const date = new Date(d.date);
        const content = d.content || '';
        d.dateDisplay = date.toLocaleDateString();
        d.content = content.substring(0, 100) + '...';
        d.userImg = this.loginService.getUserImage(d.email);
        return d;
      });
    });
  }

  createTask() {
    this.taskTitle = '';
    this.showCreateInput = true;
  }

  saveTask() {
    this.showCreateInput = false;
    const data = {
      title: this.taskTitle,
      userId: this.currentUser.id
    };
    this.userPageService.saveTask(data).subscribe(() => {
      this.getTaskList();
    });
  }

  completeTask(task: any) {
    this.userPageService.completeTask(task).subscribe();
  }

  cancelTask() {
    this.showCreateInput = false;
  }

  deleteTask(item: any) {
    const result = confirm('Do you want to delete this task!');
    if (result) {
      this.userPageService.deleteTask(item._id).subscribe(data => {
        this.getTaskList();
      });
    }
  }

  sortTasks(taskList: Array<any>) {
    this.userPageService.sortTasks(taskList).subscribe();
  }

  resetTasks() {
    this.userPageService.resetTasks(this.taskList).subscribe(() => {
      this.taskList.forEach(function(item){
        item.isDone = false;
      });
    });
  }

  signout() {
    this.loginService.logout();
  }

  createStory() {
    this.router.navigate(['/new-story']);
  }

  viewStory(story: any) {
    const link =
      '/view-story/' +
      story.title.toLowerCase().replace(/\s/g, '-') +
      '@' +
      story._id;
    this.router.navigate([link]);
  }

  deleteStory(story: any) {
    const result = confirm('Do you want to delete this story!');
    if (result) {
      this.userPageService.deleteStory(story._id).subscribe(data => {
        this.getStoryList();
      });
    }
  }

  editStory(story: any) {
    const link =
      '/edit-story/' +
      story.title.toLowerCase().replace(/\s/g, '-') +
      '@' +
      story._id;
    this.router.navigate([link]);
  }
}
