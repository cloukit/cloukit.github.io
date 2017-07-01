/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';

@Component({
  template: `
  <div class="demo">
    <p>
      to be done
    </p>    
    
    
    <p>&nbsp;</p>
    <h4>Component Theming</h4>
    <p>We will theme our Components via ngStyle and certain techniques. Therefore the following concept applies:</p>
    <p><img src="/assets/images/cloukit-component-theming.svg" width="80%" /></p>
    
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesThemeingPageComponent {

  constructor() {
    document.title = `Using Themes > guides > cloukit`;
  }

}
