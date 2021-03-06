/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <h2>Module Format &amp; Build</h2>
  <p>&nbsp;</p>

  <p>&nbsp;</p>
  <h4>Browser Support</h4>
  <p>
    We use 100% Angular with zero external dependencies.
    So it should work with all <a href="https://angular.io/guide/browser-support">supported browsers</a>
    if you use the recommended polyfills.
  </p>
  <p>
    I test all components thoroughly in the following operating systems and latest versions of the listed browsers.
  </p>
  <p>
    <img src="/assets/images/supported-browsers.svg" />
  </p>
  <p>&nbsp;</p>
  <h4>Module Format and how we Build</h4>
  <p>
    All Components are written in TypeScript and come as NgModules that are
    tree-shakeable and AOT enabled flat ES5 &amp; ES2015 Modules.
  </p>
  <p>To build our components we use <code>@angular/compiler-cli</code> aka <code>ngc</code> and <code>rollup</code>.</p>
  <p>See
    “<app-link
      href="https://www.youtube.com/watch?v=unICbsPGFIA"
      name="YouTube Packaging Angular - Jason Aden - ng-conf 2017"
      external="true"
    ></app-link>”
    and
    <app-link
      href="https://github.com/cloukit/library-build-chain"
      name="library-build-chain"
      external="true"
    ></app-link> for more details.
  </p>
  `,
  styles: [].concat(SharedStyles.styles),
})
export class TechdocModuleFormatAndBuildComponent {

  constructor() {
    document.title = `Module Format &amp; Build > techdoc > cloukit`;
  }
}
