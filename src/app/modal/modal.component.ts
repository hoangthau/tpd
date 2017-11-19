import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalTargetId: string;
  @Input() modalTitle: string;
  @Input() showFooter: boolean;

  constructor() { }

  ngOnInit() {
  }

}
