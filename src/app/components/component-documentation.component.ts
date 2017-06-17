import { Component, Input } from '@angular/core';
import { ComponentData } from '../model/component-data.model';

@Component({
  selector: 'app-component-documentation',
  template: `
  <div class="demo">
    <h3>@cloukit/{{componentId}}</h3>
    
    <div *ngIf="componentData">
      <div
        *ngFor="let version of componentData.versions; index as i;"
      >
        {{version}}
      </div>
    </div>
    
    <iframe src="https://cloukit.github.io/common/1.0.1/?x" width="800" height="400"></iframe>

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class ComponentDocumentationComponent {
  @Input()
  componentId: string;

  @Input()
  componentData: ComponentData;
}
