import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items : Array<any>;
  @Output() clickDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  complete(item){
    item.done = true;
  }

  delete(item){
    this.clickDelete.emit(item);
  }

}
