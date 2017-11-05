import { Component, OnInit } from '@angular/core';

import { UserPageService } from '../shared/user-page.service';
import { LoginService } from '../shared/login.service';

import * as md5 from 'md5';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  showCreateInput = false;
  taskTitle: string;
  userList: Array<any>;
  currentUser: any;
  modifyTaskList: boolean = false;
  gravatarUrl: string = 'https://www.gravatar.com/avatar/'
  userImg: string = this.gravatarUrl;
  taskList: Array<any> = [
    { title: 'Review my plans, my goals, my daily schedule' }
  ];
  

  constructor(private userPageService: UserPageService, private loginService: LoginService) { }

  ngOnInit() {
    this.getTaskList();
    this.currentUser = this.loginService.getCurrentUser();
    this.userImg = this.gravatarUrl + md5(this.currentUser.email) + '?s=200';
    console.log(this.userImg);
  }

  getTaskList() {
    this.userPageService.getTaskList().subscribe((data) => {
      this.taskList = data;
    });
  }

  createTask() {
    this.taskTitle = '';
    this.showCreateInput = true;
  }

  saveTask() {
    this.showCreateInput = false;
    const data = {
      title: this.taskTitle
    };
    this.userPageService.saveTask(data).subscribe(() => {
      this.getTaskList();
    });
  }

  cancelTask() {
    this.showCreateInput = false;
  }

  deleteTask(item: any) {
    this.userPageService.deleteTask(item._id).subscribe((data) => {
      this.getTaskList();
    });
  }

  signout() {
    this.loginService.logout();
  }

  enableEditMode(){
    this.modifyTaskList = !this.modifyTaskList;
  }

}
