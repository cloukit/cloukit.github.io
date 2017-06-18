import { Component } from '@angular/core';

@Component({
  template: `
  <div class="demo">
    <p>
      Welcome to <strong>resuable components for Angular</strong>. 
      And when I talk about Angular it is version 4 and higher.<br>
    </p>
    <p>Select a reusable component on the left.</p>
    
    <p>&nbsp;</p>
    <h4>Goal and State of the Project</h4>
    <p>We are currently in ALPHA state, meaning we <strong>don't accept contributions or issues</strong> at the moment.</p>
    <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>
    <p>
      <strong>Primary focus is to provide an Angular alternative to 
      <app-link external="true" href="https://atlaskit.atlassian.com/" name="Atlassian's AtlasKit"></app-link> React Components.</strong>
    </p>
    <p><strong>Secondary goal is to provide themeable components via ngStyle.</strong></p>
    
    
    <p>&nbsp;</p>
    <h4>Module Format and how we Build</h4>
    <p>All Components come as NgModules that are tree-shakeable and AOT enabled flat ES2015 Modules.</p>
    <p>(For fallback safety a flat ES5 Module is also provided)</p>
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
