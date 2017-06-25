/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, OnChanges } from '@angular/core';
import { ComponentPreviewFile } from '../model/component-data.model';

@Component({
  selector: 'app-preview-file-code-box',
  template: `
  <div class="code-box" *ngIf="previewFile">
    <div class="code-header">
      <a
        [href]="previewFile.fileUrl"
        target="_blank"
        class="code-link"
      >
        {{previewFile.filename}}
      </a>
    </div>
    <div class="code-source">
      <app-source-code-box
        [language]="language"
        [code]="previewFile.sourceCode"
      ></app-source-code-box>
    </div>
  </div>`,
  styles: [
    '.code-box { font-size:14px; }',
    '.code-header { background-color:#555555; color:#fff; margin:0; padding:10px 15px 10px 15px;}',
    '.code-link { color: #fff; text-decoration:none; font-size:16px; }',
    '.code-source { background-color:#272822; margin-top:-7px; }',
  ],
})
export class PreviewFileBoxComponent {
  @Input()
  language: string;

  @Input()
  previewFile: ComponentPreviewFile;

}
