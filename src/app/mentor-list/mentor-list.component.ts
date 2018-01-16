import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  @Input() items: Array<any>;

  @Output() deleteMentor: EventEmitter<any> = new EventEmitter();
  @Output() editMentor: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  edit(item) {
    this.editMentor.emit(item);
  }

  delete(item) {
    this.deleteMentor.emit(item);    
  }

}
