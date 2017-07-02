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
      To explain themeing we will write a custom theme for the @cloukit/toggle component.
      Therefore <strong>Poop-Chan</strong> will help us out.
    </p>    
    
    <p>
      <img src="/assets/images/demo/poop-chan.svg" style="width:80px"/>
    </p>
    <p>
        <app-markdown-box
          [markdown]="poopChanSvg"
        ></app-markdown-box>
    </p>
    
    <p>&nbsp;</p>
    <h4>Component Theming</h4>
    <p>We will theme our Components via ngStyle and certain techniques. Therefore the following concept applies:</p>
    <p><img src="/assets/images/cloukit-component-theming.svg" width="80%" /></p>
    
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesThemeingPageComponent {

  poopChanSvg = `\`\`\`html
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path d="M318.524 272.....464z" fill="#5A2300"/>
  </g>
</svg>
\`\`\``;

  constructor() {
    document.title = `Using Themes > guides > cloukit`;
  }

}
