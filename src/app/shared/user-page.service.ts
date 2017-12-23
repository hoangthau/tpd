import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpConnector } from './http-connector';

@Injectable()
export class UserPageService {
  constructor(private httpConnector: HttpConnector) {}

  getTaskList(userId) {
    const url = 'api/tasks?userId=' + userId;
    return this.httpConnector.get(url);
  }

  saveTask(data: any) {
    const url = 'api/tasks';
    return this.httpConnector.post(url, data);
  }

  completeTask(task: any) {
    const url = 'api/task/' + task._id;
    return this.httpConnector.put(url, task);
  }

  deleteTask(id: string) {
    const url = 'api/task/' + id;
    return this.httpConnector.delete(url);
  }

  sortTasks(taskList: Array<any>) {
    const url = 'api/tasks/sort';
    taskList.forEach((item, index) => {
      item.sortOrder = index;
    });
    return this.httpConnector.post(url, { taskList: taskList });
  }

  resetTasks(taskList: Array<any>) {
    const url = 'api/tasks/reset';
    return this.httpConnector.post(url, { taskList: taskList });
  }

  getStoryList(userId) {
    const url = 'api/stories?userId=' + userId;
    return this.httpConnector.get(url);
  }

  getAllStoryList() {
    const url = 'api/stories';
    return this.httpConnector.get(url);
  }

  deleteStory(id: string) {
    const url = 'api/story/' + id;
    return this.httpConnector.delete(url);
  }

  getUser(userId: string) {
    const url = 'api/user/' + userId;
    return this.httpConnector.get(url);
  }

  updateUser(userId: string, data: any) {
    const url = 'api/user/' + userId;
    return this.httpConnector.put(url, data);
  }
}
