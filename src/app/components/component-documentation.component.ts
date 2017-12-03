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
import { SharedStyles } from '../app.styles';

@Component({
  selector: 'app-component-documentation',
  template: `
  <div class="component" *ngIf="componentData?.versions">
    <div class="component-row component-row--no-border">
      <div class="component-header">
        <div class="component-headline">
          <span style="flex:10;">@cloukit/{{componentId}}</span>
          <select
            style="flex:1;"
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
          {{packageJson ? packageJson.description : '...'}}
        </div>
      </div>
    </div>
    <div class="component-row component-row--no-border" style="padding-right:28px;">
      <app-component-info-header
        [componentName]="componentId"
        [componentVersion]="componentVersion"
        [componentStatus]="componentData.status"
      >
      </app-component-info-header>
    </div>
    <div class="component-row">
      <!--
      <div class="component-col component-col-heading">
        Installation
      </div>
      -->
      <div class="component-col p-bt-0">
        <pre class="shell">npm install --save @cloukit/{{componentId}}</pre><br>
        <pre class="shell">yarn add @cloukit/{{componentId}}</pre>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading component-col-heading-demo">
        <span style="flex:8;">Demo</span>
        <span style="flex:1;text-align:right; font-size:1.2rem;">
          <a
            target="_blank"
            href="https://github.com/cloukit/{{componentId}}/tree/{{componentVersion}}/src/demo"
          >Source</a>
        </span>
      </div>
      <div class="component-col">
        <iframe
          *ngIf="iframeDocUrl"
          [src]="iframeDocUrl"
          width="100%"
          height="700"
          class="preview-iframe"
          (load)="resizeIframe($event)"
        ></iframe>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        Usage
      </div>
      <div class="component-col">
        <app-markdown-box
          [markdown]="usageMarkdown"
        ></app-markdown-box>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        Dependencies
      </div>
      <div class="component-col" *ngIf="packageJson">
        <table class="table">
          <tr *ngFor="let dependency of toPairs(packageJson.dependencies); index as i;">
            <td class="table-td" style="width:250px;">{{dependency[0]}}</td>
            <td class="table-td">{{dependency[1]}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        Peer Dependencies
      </div>
      <div class="component-col" *ngIf="packageJson">
        <table class="table">
          <tr *ngFor="let peerDependency of toPairs(packageJson.peerDependencies); index as i;">
            <td class="table-td" style="width:250px;">{{peerDependency[0]}}</td>
            <td class="table-td">{{peerDependency[1]}}</td>
          </tr>
        </table>
      </div>
    </div>
    <!--
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
    -->
    <div class="component-row" *ngIf="componentTheme">
      <div class="component-col component-col-heading">
        Theming
      </div>
      <div class="component-col">
        <app-markdown-box
          [markdown]="themeMarkdown"
        ></app-markdown-box>
        <p>The <strong>default Theme</strong> is composed like this.</p>
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentTheme"
        ></app-preview-file-code-box>
      </div>
    </div>
  </div>`,
  styles: [
    '.component-row { display:flex; margin-bottom:10px; padding:10px; flex-direction: column; }',
    '.component-row--no-border { border-bottom:0px; }',
    '.component-col { margin-right:20px; min-width:900px; }',
    '.component-col-heading { font-size:1.6rem; font-weight:300; min-height:35px; max-height:35px; margin-bottom:10px; color: #710ECC; border-bottom: 1px solid #710ECC; }',
    '.component-col-heading-demo { display:flex; }',
    '.component-header { display:block; }',
    '.component-headline { display:flex; font-size:30px; margin-bottom:8px; padding-right:23px;}',
    '.component-description { font-size:20px; margin-bottom:20px; }',
    '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
    '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
    '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #272822; }',
    '.preview-iframe { border:0; border-bottom:1px solid #efefef; }',
    '.table { font-family:monospace; }',
    '.table-td { padding:3px; }',
  ].concat(SharedStyles.styles),

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

  @Input()
  themeMarkdown: string;

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

  resizeIframe(event: Event) {
    // const iframe = <HTMLIFrameElement> event.srcElement;
    // iframe.height = iframe.contentWindow.outerHeight + 30 + 'px';
  }
}
