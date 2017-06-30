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
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesThemeingPageComponent {

  constructor() {
    document.title = `guide - Using Themes - cloukit`;
  }

}
