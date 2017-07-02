/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';

@Component({
  template: `
  <div class="demo">
    <h2>Guide: Using Custom Icons</h2>
    <p>
      To explain how cloukit handles icons and how you can use your 
      own icons we will need the help of <strong>Poop-Chan</strong>.
    </p>
    <p>
      <img src="/assets/images/demo/poop-chan.svg" style="width:80px"/>
    </p>
    <p>
      Icons work with <strong>convention over configuration</strong>, meaning that
      they consist of only one path with a viewbox of 512x512 pixels.
    </p>
    <p>
        <app-markdown-box
          [markdown]="poopChanSvg"
        ></app-markdown-box>
    </p>
    
    <p>
      When you use the wonderful <a href="https://www.sketchapp.com/">Sketch</a> to draw your icons do it like this:
    </p>
    
    <p>
        <img src="/assets/images/demo/icon-sketch-howto.png" style="width:60%"/>
    </p>
    
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesIconingPageComponent {

  poopChanSvg = `\`\`\`html
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path d="M318.524 272.....464z" fill="#5A2300"/>
  </g>
</svg>
\`\`\``;

  constructor() {
    document.title = `Using Custom Icons > guides > cloukit`;
  }

}
