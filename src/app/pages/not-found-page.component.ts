/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';

@Component({
  template: `
  <div class="for0four">
    <h3>these are not the droids you are looking for!</h3>
  </div>`,
  styles: [ '.for0four { font-family:sans-serif; }' ],
})
export class NotFoundPageComponent {

  constructor() {
    document.title = `these are not the droids you are looking for!`;
  }
}
