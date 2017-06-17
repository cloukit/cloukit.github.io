import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ComponentData, ComponentDataVersion, ComponentPreviewFile } from '../model/component-data.model';
import { DomSanitizer } from '@angular/platform-browser';
import { isNullOrUndefined } from 'util';

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
      <div class="component-col">
        {{componentData.description}}
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
        depends on
      </div>
      <div class="component-col" *ngIf="currentVersion?.dependsOnComponents">
        <span *ngFor="let component of currentVersion.dependsOnComponents; index as i;">
          @cloukit/{{component}}<span *ngIf="currentVersion.dependsOnComponents.length-1 !== i">,</span>
        </span>
      </div>
    </div>
    <div class="component-row">
      <div class="component-col component-col-heading">
        provided modules
      </div>
      <div class="component-col" *ngIf="currentVersion?.modules">
        <span *ngFor="let module of currentVersion.modules; index as i;">
          {{module}}<span *ngIf="currentVersion.modules.length-1 !== i">,</span>
        </span>
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
    
      <br>
      
      <br>
  
      <app-preview-file-code-box
        language="typescript"
        [previewFile]="componentPreviewModuleSource"
      ></app-preview-file-code-box>
  
      <app-preview-file-code-box
        language="typescript"
        [previewFile]="componentPreviewSource"
      ></app-preview-file-code-box>
  
  
      <iframe [src]="getComponentDocIframeUrl()" width="800" height="400"></iframe>

  </div>`,
  styles: [
    '.component-row { display:flex; margin-bottom:10px; padding:10px; border-bottom:1px solid #ccc; }',
    '.component-col { margin-right:20px; }',
    '.component-col-heading { width:150px; font-weight:bold; }',
    '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
    '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
    '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #555555; }',
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

  @Output()
  componentVersionChange = new EventEmitter();

  selectedVersion: string;
  currentVersion: ComponentDataVersion;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    this.selectedVersion = this.componentVersion;
    if (!isNullOrUndefined(this.componentData)) {
      this.currentVersion = this.componentData.versions.filter(v => v.version === this.selectedVersion)[0];
    }
  }

  getComponentDocIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://cloukit.github.io/${this.componentId}/${this.componentVersion}/`);
  }

  changeComponentVersion() {
    this.componentVersionChange.emit(this.selectedVersion);
  }
}
