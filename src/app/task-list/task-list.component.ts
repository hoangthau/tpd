import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() items: Array<any>;

  @Output() clickDelete = new EventEmitter();
  @Output() sortTasks = new EventEmitter();
  @Output() completeTask = new EventEmitter();

  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      handle: '.sort-icon',
      onUpdate: (event: any) => {
        this.sortTasks.emit(this.items);
      }
    };
  }

  complete(item) {
    item.isDone = !item.isDone;
    this.completeTask.emit(item);
  }

  delete(item) {
    this.clickDelete.emit(item);
  }

}
