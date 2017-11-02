import { Component, OnInit } from '@angular/core';

import { UserPageService } from '../shared/user-page.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  showCreateInput = false;
  taskList: Array<any>;
  taskTitle: string;
  userList: Array<any>;

  constructor(private userPageService: UserPageService, private loginService: LoginService) { }

  ngOnInit() {
    this.getTaskList();
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

}
