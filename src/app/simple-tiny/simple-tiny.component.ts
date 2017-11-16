import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';

declare var tinymce: any;

@Component({
  selector: 'app-simple-tiny',
  template: `<div class="tiny-mce"><textarea id="{{elementId}}"></textarea></div>`,
  styleUrls: ['./simple-tiny.component.css']
  
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    const self = this;
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      height : '480',
      setup: editor => {
        self.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          self.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
