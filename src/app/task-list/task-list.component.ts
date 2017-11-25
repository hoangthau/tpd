import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() items : Array<any>;
  @Input() modifyMode: boolean = false;
  @Output() clickDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  complete(item){
    item.done = !item.done;
  }

  delete(item){
    this.clickDelete.emit(item);
  }

}
