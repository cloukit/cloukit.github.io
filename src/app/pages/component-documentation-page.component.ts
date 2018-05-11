/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentData, ComponentPreviewFile, PackageJson } from '../model/component-data.model';
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
      [componentTheme]="componentTheme"
      [themeMarkdown]="themeMarkdown"
      [packageJson]="packageJson"
      [componentDistUrl]="componentDistUrl"
      [usageMarkdown]="usageMarkdown"
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
  componentTheme: ComponentPreviewFile;
  themeMarkdown: string;
  componentDistUrl: string;
  packageJson: PackageJson;
  usageMarkdown: string;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentFetchService: ComponentFetchService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramComponentId = params['componentId'];
      this.paramComponentVersion = params['componentVersion'];
      document.title = `${this.paramComponentId} > component > cloukit`;
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
    const highestVersion = semver.maxSatisfying(this.componentData.versions.map(v => v.version), '*');
    if (isNullOrUndefined(this.paramComponentVersion) ||
        componentData.versions.filter(v => v.version === this.paramComponentVersion).length === 0) {
      console.log('redirecting to highest version', highestVersion);
      this.router.navigate(['/component', this.paramComponentId, highestVersion]);
    } else {
      this.componentDistUrl = this.componentFetchService.getUnpkgComDistUrl(this.paramComponentId, this.paramComponentVersion);
      const currentVersion = this.componentData.versions.filter(v => v.version === this.paramComponentVersion)[0];
      this.componentTheme = null;
      if (currentVersion.hasTheme) {
        this.componentFetchService
          .getTheme(this.paramComponentId, this.paramComponentVersion)
          .subscribe(
            data => this.componentTheme = data,
            error => this.errorMessage = <any>error);
        this.componentFetchService
          .getThemeMarkdown(this.paramComponentId, this.paramComponentVersion)
          .subscribe(
            markdown => this.themeMarkdown = markdown,
            error => this.errorMessage = <any>error
          );
      }
      this.componentFetchService
        .getPackageJson(this.paramComponentId, this.paramComponentVersion)
        .subscribe(
          packageJson => this.packageJson = packageJson,
          error => this.errorMessage = <any>error
        );
      this.componentFetchService
        .getUsageMarkdown(this.paramComponentId, this.paramComponentVersion)
        .subscribe(
          markdown => this.usageMarkdown = markdown,
          error => this.errorMessage = <any>error
        );
    }
  }

  handleComponentVersionChange(componentVersion: string) {
    console.log('redirecting to selected version', componentVersion);
    this.router.navigate(['/component', this.paramComponentId, componentVersion]);
  }

}
