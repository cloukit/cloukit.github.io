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
    <p>Select a reusable component on the left.</p>
    
    <p>&nbsp;</p>
    <h4>Goal and State of the Project</h4>
    <p>We are currently in ALPHA state, meaning we <strong>don't accept contributions or issues</strong> at the moment.</p>
    <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>
    <p>
      <strong>Primary goal</strong> is to provide common Form Components such as toggle, multi-select a.s.o.
    </p>
    <p><strong>Secondary goal</strong> is to provide themeable components via ngStyle.</p>
    
    
    <p>&nbsp;</p>
    <h4>Module Format and how we Build</h4>
    <p>
      All Components are written in TypeScript and come as NgModules that are 
      tree-shakeable and AOT enabled flat ES5 &amp; ES2015 Modules.
    </p>
    <p>To build our components we use <code>@angular/compiler-cli</code> aka <code>ngc</code> and <code>rollup</code>.</p>
    <p>See 
      <strong>
        <app-link
          href="https://www.youtube.com/watch?v=unICbsPGFIA"
          name="YouTube Packaging Angular - Jason Aden - ng-conf 2017"
          external="true"
        ></app-link>
      </strong> and 
      <app-link
        href="https://github.com/cloukit/library-build-chain"
        name="library-build-chain"
        external="true"
      ></app-link> for more details.
    </p>
    
    <p>&nbsp;</p>
    <h4>Component Theming</h4>
    <p>We will theme our Components via ngStyle and certain techniques. Therefore the following concept applies:</p>
    <p><img src="/assets/images/cloukit-component-theming.svg" width="80%" /></p>
    
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

}
