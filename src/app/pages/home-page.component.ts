import { Component } from '@angular/core';

@Component({
  template: `
  <div class="demo">
    <h3>cloukit</h3>
    Welcome. Select a reusable component on the left.
    <h4>Module Format</h4>
    <p>It comes as an tree-shakeable and AOT enabled flat ES2015 Module.</p>
    <p>See 
      <strong>
        <a href="https://www.youtube.com/watch?v=unICbsPGFIA">YouTube Packaging Angular - Jason Aden - ng-conf 2017</a>
      </strong> and 
      <a href="https://github.com/filipesilva/angular-quickstart-lib">angular-quickstart-lib</a> for more details.
    </p>
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class HomePageComponent {

}
