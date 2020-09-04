/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <h2>License &amp; Author</h2>
  <p>&nbsp;</p>
  <h4>License</h4>
  <p>
    The sourcecode, component-graphics and documentation are licensed under the
    <app-link
      href="https://github.com/cloukit/legal"
      name="MIT License"
      external="true"
    ></app-link>.
  </p>
  <p>The cloukit logo is intellectual property of Bernhard Grünewaldt.</p>

  <p>&nbsp;</p>
  <h4>Author</h4>
  <p>
    <app-link
      href="https://github.com/clouless"
      name="Bernhard Grünewaldt"
      external="true"
    ></app-link>
  </p>
  `,
  styles: [].concat(SharedStyles.styles),
})
export class TechdocLicenseComponent {

  constructor() {
    document.title = `License > techdoc > cloukit`;
  }
}
