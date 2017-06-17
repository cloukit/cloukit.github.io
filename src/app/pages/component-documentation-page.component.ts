import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentData } from '../model/component-data.model';
import { ComponentFetchService } from '../services/component-fetch.service';

@Component({
  selector: 'app-component-documentation-page',
  template: `
  <div class="demo">
    <app-component-documentation
      [componentId]="componentId"
      [componentData]="componentData"
    ></app-component-documentation>
    
    {{errorMessage}}

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class ComponentDocumentationPageComponent implements OnInit {
  componentId: string;
  componentData: ComponentData;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private componentFetchService: ComponentFetchService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.componentId = params['componentId'];
      this.componentFetchService
        .getComponent(this.componentId)
        .subscribe(
          componentData => this.componentData = componentData,
          error =>  this.errorMessage = <any>error
        );
    });


  }

}
