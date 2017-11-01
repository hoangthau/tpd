import { Component, OnInit } from '@angular/core';

import { HomePageService } from '../shared/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  showCreateInput = false;
  taskList: Array<any>;
  taskTitle: string;

  constructor(private homePageService: HomePageService) { }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList(){
    this.homePageService.getTaskList().subscribe((data) => {
      this.taskList = data;
    });
  }

  createTask(){
    this.taskTitle = '';
    this.showCreateInput = true;
  }

  saveTask(){
    this.showCreateInput = false;
    let data = {
      title: this.taskTitle
    };
    this.homePageService.saveTask(data).subscribe((data) => {
      this.getTaskList();
    });
  }

  cancelTask(){
    this.showCreateInput = false;
  }

  deleteTask(item: any){
    this.homePageService.deleteTask(item._id).subscribe((data) => {
      this.getTaskList();
    });
  }

}
