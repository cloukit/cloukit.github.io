import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ComponentData } from '../model/component-data.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-component-documentation',
  template: `
  <div class="demo">
    <h3>@cloukit/{{componentId}}</h3>
    <span *ngIf="componentData">
        <select
          [(ngModel)]="selectedVersion"
          (change)="changeComponentVersion()"
        >
          <option
            *ngFor="let version of componentData.versions; index as i;"
            [value]="version"
          >
            {{version}}
          </option>
        </select>
    </span>
    <br>
    <pre>npm install --save @cloukit/{{componentId}}</pre>
    <br>

    <app-source-code-box
      language="javascript"
      [code]="codePreview"
    ></app-source-code-box>

    <iframe [src]="getComponentDocIframeUrl()" width="800" height="400"></iframe>

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class ComponentDocumentationComponent implements OnChanges {
  @Input()
  componentId: string;

  @Input()
  componentVersion: string;

  @Input()
  componentData: ComponentData;

  @Output()
  componentVersionChange = new EventEmitter();

  selectedVersion: string;
  codePreview: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.selectedVersion = this.componentVersion;
    this.codePreview = 'const data = "1"; const foo = (i) => i+1;';

  }

  getComponentDocIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://cloukit.github.io/${this.componentId}/${this.componentVersion}/`);
  }

  changeComponentVersion() {
    this.componentVersionChange.emit(this.selectedVersion);
  }
}
