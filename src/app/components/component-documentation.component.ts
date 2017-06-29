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
    <div class="component-row">
      <div class="component-col component-col-heading">
        component
      </div>
      <div class="component-col">
        @cloukit/{{componentId}}
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        description
      </div>
      <div class="component-col" *ngIf="packageJson">
        {{packageJson.description}}
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        status
      </div>
      <div class="component-col">
        {{componentData.status === 'EXPERIMENTAL' ? 'EXPERIMENTAL - API might change unexpectedly. Use at own risk' : ''}}
        {{componentData.status === 'STABLE' ? 'STABLE - API should be stable.' : ''}}
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        version
      </div>
      <div class="component-col">
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
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        installation
      </div>
      <div class="component-col p-bt-0">
        <pre class="shell">npm install --save @cloukit/{{componentId}}</pre>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        dist contents
      </div>
      <div class="component-col p-bt-0">
        <app-link
          [href]="componentDistUrl"
          [name]="componentDistUrl"
          external="true"
        ></app-link>
      </div>
    </div>    
    <div class="component-row">
      <div class="component-col component-col-heading">
        preview
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
        usage detail
      </div>
      <div class="component-col">
        <app-markdown-box
          [markdown]="usageMarkdown"
        ></app-markdown-box>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        Dependency Graph
      </div>
      <div class="component-col">
        <img [src]="dependencyGraphUrl" style="width:100%">
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        usage
      </div>
      <div class="component-col">
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentPreviewModuleSource"
        ></app-preview-file-code-box>    
        <app-preview-file-code-box
          language="typescript"
          [previewFile]="componentPreviewSource"
        ></app-preview-file-code-box>
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
  </div>`,
  styles: [
    '.component-row { display:flex; margin-bottom:10px; padding:10px; border-bottom:1px solid #ccc; }',
    '.component-col { margin-right:20px; min-width:700px; }',
    '.component-col-heading { min-width:150px; max-width:200px; font-weight:bold; }',
    '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
    '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
    '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #555555; }',
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
  componentPreviewModuleSource: ComponentPreviewFile;

  @Input()
  componentPreviewSource: ComponentPreviewFile;

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
  dependencyGraphUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.selectedVersion = this.componentVersion;
    if (!isNullOrUndefined(this.componentData)) {
      this.currentVersion = this.componentData.versions.filter(v => v.version === this.selectedVersion)[0];
    }
    this.iframeDocUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://cloukit.github.io/${this.componentId}/${this.componentVersion}/`);
    this.dependencyGraphUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://unpkg.com/@cloukit/${this.componentId}@${this.componentVersion}/documentation/dependencies.svg`);
  }


  changeComponentVersion() {
    this.componentVersionChange.emit(this.selectedVersion);
  }

  toPairs(obj: any) {
    return _.toPairs(obj);
  }
}
