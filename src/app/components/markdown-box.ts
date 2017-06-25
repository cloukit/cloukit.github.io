/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, OnChanges } from '@angular/core';
import * as showdown from 'showdown';
const converter = new showdown.Converter();

@Component({
  selector: 'app-markdown-box',
  template: `
  <div
    class="markdown-box"
    [innerHtml]="markdownHtml | safeHtml"
  ></div>`,
  styles: [ '.markdown-box { font-size:14px; }' ],
})
export class MarkdownBoxComponent implements OnChanges {

  @Input()
  markdown: string;

  markdownHtml: string;

  ngOnChanges() {
    converter.setFlavor('github');
    this.markdownHtml = converter.makeHtml(this.markdown);
  }

}
