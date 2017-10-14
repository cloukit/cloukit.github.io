/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import {
  ComponentData, ComponentDataVersion, ComponentPreviewFile, PackageJson,
} from '../model/component-data.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isNullOrUndefined } from 'util';
import _ from 'lodash';

@Component({
  selector: 'app-component-documentation',
  template: `
  <div class="component" *ngIf="componentData?.versions">
    <div class="component-row component-row--no-border">
      <div class="component-header">
        <div class="component-headline">
          @cloukit/{{componentId}}
          <select
            [(ngModel)]="selectedVersion"
            (change)="changeComponentVersion()"
            class="selectbox"
          >
            <option
              *ngFor="let version of componentData.versions; index as i;"
              [value]="version.version"
            >
              {{version.version}}
            </option>
          </select>
        </div>
        <div class="component-description">
          {{packageJson ? packageJson.description : ''}}
        </div>
      </div>
    </div>
    <div class="component-row component-row--no-border">
      <app-component-info-header
        [componentName]="componentId"
        [componentVersion]="componentVersion"
        [componentStatus]="componentData.status"
        style="width:100%"
      >
      </app-component-info-header>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        installation
      </div>
      <div class="component-col p-bt-0">
        <pre class="shell">npm install --save @cloukit/{{componentId}}</pre><br>
        <pre class="shell">yarn add @cloukit/{{componentId}}</pre>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        demo
      </div>
      <div class="component-col">
        <iframe
          *ngIf="iframeDocUrl"
          [src]="iframeDocUrl"
          width="100%"
          height="400"
          class="preview-iframe"
        ></iframe>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        notice
      </div>
      <div class="component-col">
        <app-markdown-box
          [markdown]="usageMarkdown"
        ></app-markdown-box>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        dependencies
      </div>
      <div class="component-col" *ngIf="packageJson">
        <table class="table">
          <tr *ngFor="let dependency of toPairs(packageJson.dependencies); index as i;">
            <td class="table-td">{{dependency[0]}}</td>
            <td class="table-td">{{dependency[1]}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        peer dependencies
      </div>
      <div class="component-col" *ngIf="packageJson">
        <table class="table">
          <tr *ngFor="let peerDependency of toPairs(packageJson.peerDependencies); index as i;">
            <td class="table-td">{{peerDependency[0]}}</td>
            <td class="table-td">{{peerDependency[1]}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        demo source
      </div>
      <div class="component-col">
        <app-preview-file-code-box
          language="html"
          [previewFile]="componentPreviewTemplate"
        ></app-preview-file-code-box>
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentPreviewSource"
        ></app-preview-file-code-box>
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentPreviewModule"
        ></app-preview-file-code-box>
      </div>
    </div>
    <div class="component-row" *ngIf="componentTheme">
      <div class="component-col component-col-heading">
        theming
      </div>
      <div class="component-col">
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentTheme"
        ></app-preview-file-code-box>
      </div>
    </div>
  </div>`,
  styles: [
    '.component-row { display:flex; margin-bottom:10px; padding:10px; border-bottom:1px solid #ccc; }',
    '.component-row--no-border { border-bottom:0px; }',
    '.component-col { margin-right:20px; min-width:900px; }',
    '.component-col-heading { min-width:150px; max-width:200px; font-weight:bold; }',
    '.component-header { display:block; }',
    '.component-headline { font-size:30px; margin-bottom:8px;}',
    '.component-description { font-size:20px; margin-bottom:20px; }',
    '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
    '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
    '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #272822; }',
    '.preview-iframe { border:1px solid #ccc; }',
    '.table { font-family:monospace; }',
    '.table-td { padding:3px; }',
  ],
})
export class ComponentDocumentationComponent implements OnChanges {
  @Input()
  componentId: string;

  @Input()
  componentVersion: string;

  @Input()
  componentData: ComponentData;

  @Input()
  componentPreviewTemplate: ComponentPreviewFile;

  @Input()
  componentPreviewSource: ComponentPreviewFile;

  @Input()
  componentPreviewModule: ComponentPreviewFile;

  @Input()
  componentTheme: ComponentPreviewFile;

  @Input()
  packageJson: PackageJson;

  @Input()
  componentDistUrl: string;

  @Input()
  usageMarkdown: string;

  @Output()
  componentVersionChange = new EventEmitter();

  selectedVersion: string;
  currentVersion: ComponentDataVersion;
  iframeDocUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.selectedVersion = this.componentVersion;
    if (!isNullOrUndefined(this.componentData)) {
      this.currentVersion = this.componentData.versions.filter(v => v.version === this.selectedVersion)[ 0 ];
    }
    this.iframeDocUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://cloukit.github.io/${this.componentId}/${this.componentVersion}/demo/`);
  }

  changeComponentVersion() {
    this.componentVersionChange.emit(this.selectedVersion);
  }

  toPairs(obj: any) {
    return _.toPairs(obj);
  }
}
