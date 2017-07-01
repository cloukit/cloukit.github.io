/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-source-code-box',
  template: `
  <app-prism-css-wrapper>
    <div class="code-box">
      <pre 
        [class]="getLanguage()"><code 
        [class]="getLanguage()"
        [innerHtml]="codePreview | safeHtml"></code></pre>
    </div>
  </app-prism-css-wrapper>`,
  styles: [ '.code-box { font-size:14px; }' ],
})
export class SourceCodeBoxComponent implements OnChanges {
  @Input()
  language: string;

  @Input()
  code: string;

  codePreview: string;

  ngOnChanges() {
    this.codePreview = Prism.highlight(this.code, Prism.languages[this.language]);
  }

  getLanguage() {
    return `language-${this.language}`;
  }

}
