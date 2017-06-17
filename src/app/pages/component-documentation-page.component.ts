import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentData, ComponentPreviewFile } from '../model/component-data.model';
import { ComponentFetchService } from '../services/component-fetch.service';
import * as semver from 'semver';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-component-documentation-page',
  template: `
  <div>
    <app-component-documentation
      [componentId]="paramComponentId"
      [componentVersion]="paramComponentVersion"
      [componentData]="componentData"
      [componentPreviewModuleSource]="componentPreviewModuleSource"
      [componentPreviewSource]="componentPreviewSource"
      (componentVersionChange)="handleComponentVersionChange($event)"
    ></app-component-documentation>
    {{errorMessage}}
  </div>`,
  styles: [  ],
})
export class ComponentDocumentationPageComponent implements OnInit {
  paramComponentId: string;
  paramComponentVersion: string;
  componentData: ComponentData;
  componentPreviewModuleSource: ComponentPreviewFile;
  componentPreviewSource: ComponentPreviewFile;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentFetchService: ComponentFetchService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramComponentId = params['componentId'];
      this.paramComponentVersion = params['componentVersion'];
      this.componentFetchService
        .getComponent(this.paramComponentId)
        .subscribe(
          componentData => this.setComponentData(componentData as ComponentData),
          error =>  this.errorMessage = <any>error
        );
    });
  }

  setComponentData(componentData: ComponentData) {
    this.componentData = componentData;
    if (isNullOrUndefined(this.paramComponentVersion)) {
      const highestVersion = semver.maxSatisfying(this.componentData.versions.map(v => v.version), '*');
      console.log('redirecting to highest version', highestVersion);
      this.router.navigate(['/component', this.paramComponentId, highestVersion]);
    } else {
      this.componentFetchService
        .getModuleSourceCode(this.paramComponentId, this.paramComponentVersion)
        .subscribe(
          componentPreviewModuleSource => this.componentPreviewModuleSource = componentPreviewModuleSource,
          error => this.errorMessage = <any>error
        );
      this.componentFetchService
        .getPreviewSourceCode(this.paramComponentId, this.paramComponentVersion)
        .subscribe(
          componentPreviewSource => this.componentPreviewSource = componentPreviewSource,
          error => this.errorMessage = <any>error
        );
    }
  }

  handleComponentVersionChange(componentVersion: string) {
    console.log('redirecting to selected version', componentVersion);
    this.router.navigate(['/component', this.paramComponentId, componentVersion]);
  }

}
