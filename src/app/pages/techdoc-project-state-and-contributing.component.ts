/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <h2>Project State &amp; Contributing</h2>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h4>Goal and State of the Project</h4>
  <p>THIS PROJECT IS DEPRECATED AND ARCHIVED.</p>
  <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>
  <p>
    Primary goal is to provide common form components such as toggle, multi-select and more that
    easily themeable via ngStyle.
  </p>
  `,
  styles: [].concat(SharedStyles.styles),
})
export class TechdocProjectStateAndContributingComponent {

  constructor() {
    document.title = `Project State &amp; Contributing > techdoc > cloukit`;
  }
}
