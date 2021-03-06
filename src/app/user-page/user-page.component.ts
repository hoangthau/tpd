import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserPageService } from '../shared/user-page.service';
import { LoginService } from '../shared/login.service';
import { CommonService } from '../shared/common.service';
import { UploadImageService } from '../shared/upload-image.service';

import * as md5 from 'md5';
declare var $: any;

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  showCreateInput: boolean = false;
  isEditProfile: boolean = false;
  taskTitle: string;
  userList: Array<any>;
  currentUser: any;
  userImg: string;
  joinDate: string;
  taskList: Array<any> = [];
  storyList: Array<any> = [];
  mentorList: Array<any> = [];
  coverFile: any;
  coverImg: any;
  mentorImg: any;
  done: boolean = true;
  creatingMentor: any = {
    fullName: '',
    occupation: '',
    language: '',
    nationality: '',
    works: ''
  };
  isCreatingMentor: boolean = false;
  isEditingMentor: boolean = false;

  constructor(
    private userPageService: UserPageService,
    private loginService: LoginService,
    private router: Router,
    private commonService: CommonService,
    private uploadImageService: UploadImageService
  ) {}

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    this.userImg = this.loginService.getUserImage(this.currentUser.email);
    this.getUser();
    this.getTaskList();
    this.getStoryList();
    this.getMentorList();
    if (this.currentUser && this.currentUser.joinDate) {
      const date = new Date(this.currentUser.joinDate);
      this.joinDate =
        this.commonService.getMonthLabel(date) + ' ' + date.getFullYear();
    }
  }

  getUser() {
    this.userPageService.getUser(this.currentUser.id).subscribe((data: any) => {
      this.done = true;
      this.currentUser.coverImg = data.coverImg;
    });
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
    let sortOrder = this.taskList.length;
    const lastTask = this.taskList[this.taskList.length - 1];
    if (lastTask) {
      sortOrder = lastTask.sortOrder + 1;
    }
    const data = {
      title: this.taskTitle,
      userId: this.currentUser.id,
      sortOrder: sortOrder
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

  editTask(task: any) {
    this.userPageService.updateTask(task).subscribe();
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
    const result = confirm('Do you want to reset all tasks!');
    if (result) {
      this.taskList.forEach(function(item) {
        item.isDone = false;
      });
      this.userPageService.resetTasks(this.taskList).subscribe();
    }
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

  editProfile() {
    this.isEditProfile = !this.isEditProfile;
  }

  changeFile($event: any) {
    this.coverFile = $event;
  }

  acceptCoverImg() {
    this.coverImg = this.coverFile;
  }

  saveChanges() {
    this.isEditProfile = false;
    if (this.currentUser && this.currentUser.id) {
      const data = {
        fullName: this.currentUser.fullName,
        coverImg: ''
      };

      if (this.coverImg) {
        this.done = false;
        this.uploadImageService.upload(this.coverFile).subscribe(response => {
          data.coverImg = response.url;
          this.updateUser(this.currentUser.id, data);
        });
      }
    }
  }

  updateUser(userId: string, data) {
    this.userPageService.updateUser(userId, data).subscribe(() => {
      this.getUser();
    });
  }

  getMentorList() {
    this.userPageService.getMentorList(this.currentUser.id).subscribe(data => {
      this.mentorList = data;
    });
  }

  openCreateMentorPopup() {
    this.isCreatingMentor = true;
    this.isEditingMentor = false;
    this.creatingMentor = {
      fullName: '',
      occupation: '',
      language: '',
      nationality: '',
      works: ''
    };
  }

  allowCreateMentor() {
    const allow =
      this.creatingMentor.fullName &&
      this.creatingMentor.occupation &&
      this.creatingMentor.language &&
      this.creatingMentor.nationality &&
      this.creatingMentor.works;
    return allow;
  }

  submitMentor() {
    if (this.isCreatingMentor) {
      this.createMentor();
    } else {
      this.updateMentor();
    }
  }

  createMentor() {
    const data = this.creatingMentor;
    data.userId = this.currentUser.id;
    data.imageUrl = '';

    if (this.mentorImg) {
      this.done = false;
      this.uploadImageService.upload(this.mentorImg).subscribe(response => {
        data.imageUrl = response.url;
        this.userPageService.saveMentor(data).subscribe(() => {
          this.getMentorList();
          this.done = true;
        });
      });
    } else {
      this.userPageService.saveMentor(data).subscribe(() => {
        this.getMentorList();
      });
    }
  }

  updateMentor() {
    const data = this.creatingMentor;
    const mentorId = data._id;
    this.userPageService.updateMentor(data, mentorId).subscribe(() => {
      this.getMentorList();
    });
  }

  deleteMentor(mentor) {
    const result = confirm('Do you want to delete this mentor!');
    if (result) {
      this.userPageService.deleteMentor(mentor._id).subscribe(data => {
        this.getMentorList();
      });
    }
  }

  editMentor(mentor) {
    const createMentorModal = $('#createMentorModal');
    this.isCreatingMentor = false;
    this.isEditingMentor = true;
    this.creatingMentor = { ...mentor };
    createMentorModal.modal();
  }

  changeMentorImg(image) {
    this.mentorImg = image;
  }
}
