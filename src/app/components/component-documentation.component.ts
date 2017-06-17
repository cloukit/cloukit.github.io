import { Component } from '@angular/core';

@Component({
  selector: 'app-component-documentation',
  template: `
  <div class="demo">
    <h3>@cloukit/common 1.0.1</h3>
    
    <!-- https://cloukit.github.io/common/versions.json -->
    
    <iframe src="https://cloukit.github.io/common/1.0.1/?x" width="800" height="400"></iframe>

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class ComponentDocumentationComponent {

}
