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
      Welcome to <strong>resuable components for Angular</strong>. 
      And when I say Angular I am talking about version 4 and higher.<br>
    </p>
    
    <p>&nbsp;</p>
    <h4>Goal and State of the Project</h4>
    <p>We are currently in ALPHA state, meaning we <strong>don't accept contributions or issues</strong> at the moment.</p>
    <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>
    <p>
      Primary goal is to provide common form components such as toggle, multi-select and more that
      easily themeable via ngStyle.
    </p>
    
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
    <p>
        <a href="http://www.flaticon.com/free-icon/glass_118409">Glas Icon</a> made by 
        <a href="http://www.flaticon.com/authors/papedesign" title="Papedesign">Papedesign</a> from 
        <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </p>
    <p>
        <a href="http://www.flaticon.com/free-icon/frankenstein_253491">Frankenstein Icon</a> made by 
        <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
        <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
    </p>
    
    
    <p>&nbsp;</p>
    <h4>Author</h4>
    <p>
      <app-link
        href="https://codeclou.io"
        name="codeclou.io"
        external="true"
      ></app-link>
      - 
      <app-link
        href="https://github.com/clouless"
        name="Bernhard Grünewaldt"
        external="true"
      ></app-link>
    </p>
    
    

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class HomePageComponent {

  constructor() {
    document.title = `welcome to cloukit`;
  }

}
