import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentData } from '../model/component-data.model';
import { ComponentFetchService } from '../services/component-fetch.service';
import * as semver from 'semver';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-component-documentation-page',
  template: `
  <div>
    <app-component-documentation
      [componentId]="componentId"
      [componentVersion]="componentVersion"
      [componentData]="componentData"
      (componentVersionChange)="handleComponentVersionChange($event)"
    ></app-component-documentation>
    {{errorMessage}}
  </div>`,
  styles: [  ],
})
export class ComponentDocumentationPageComponent implements OnInit {
  componentId: string;
  componentVersion: string;
  componentData: ComponentData;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private componentFetchService: ComponentFetchService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.componentId = params['componentId'];
      this.componentVersion = params['componentVersion'];
      this.componentFetchService
        .getComponent(this.componentId)
        .subscribe(
          componentData => this.setComponentData(componentData as ComponentData),
          error =>  this.errorMessage = <any>error
        );
    });
  }

  setComponentData(componentData: ComponentData) {
    this.componentData = componentData;
    if (isNullOrUndefined(this.componentVersion)) {
      const highestVersion = semver.maxSatisfying(this.componentData.versions, '*');
      console.log('redirecting to highest version', highestVersion);
      this.router.navigate(['/component', this.componentId, highestVersion]);
    }
  }

  handleComponentVersionChange(componentVersion: string) {
    console.log('redirecting to selected version', componentVersion);
    this.router.navigate(['/component', this.componentId, componentVersion]);
  }

}
