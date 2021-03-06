import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
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
export class SimpleTinyComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() elementId: String;
  @Input() content: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    const self = this;
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      height: '380',
      setup: editor => {
        self.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          self.onEditorKeyup.emit(content);
        });
        editor.on('init', function () {
          if (self.content) {
            editor.setContent(self.content);
          }
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.content && this.editor) {
      this.editor.setContent(changes.content.currentValue);
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
