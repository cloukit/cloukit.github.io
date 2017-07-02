/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { GuidesDemoData } from '../model/guides-demo-data.model';

@Component({
  template: `
  <div class="demo">
    <h2>Guide: Using Custom Icons</h2>
    <p>
      To explain how cloukit handles icons and how you can use your 
      own icons we will need the help of <strong>Poop-Chan</strong>.
    </p>
    <p style="text-align:center">
      <img src="/assets/images/demo/poop-chan.svg" style="width:80px"/>
    </p>
    <p>
      Icons work with <strong>convention over configuration</strong>, meaning that
      they consist of only one path with a viewbox of 512x512 pixels.
    </p>
    <p>
      <app-markdown-box [markdown]="guidesDemoData.poopChanSvg"></app-markdown-box>
    </p>
 
    <p>
      When you use the wonderful <a href="https://www.sketchapp.com/">Sketch</a> to draw your icons do it like this.
      Create a <strong>Slice</strong> that is 512x512 pixels big and position it on <code>x=0</code> and <code>y=0</code>.
      Then draw your icon in the middle of the slice and <strong>combine the shapes</strong> to only one.
      Lastly export the slice as SVG.
    </p>
    <p style="text-align:center">
      <img src="/assets/images/demo/icon-sketch-howto.png" style="width:90%"/>
    </p>
    <p>
      Since the outer SVG-Code of the icon will always be the same, we <strong>just need to save the path's d-attribute</strong>
     into our TS-file like so.
    </p>
    <p>
      <app-markdown-box [markdown]="guidesDemoData.poopChanTs"></app-markdown-box>
    </p>
    <p>&nbsp;</p>
    <p>
      <strong>Tip:</strong>
      Minify your SVG code with the <a href="https://jakearchibald.github.io/svgomg/">awesome SVGOMG</a> tool. 
      That will shrink the size of the path code.
    </p>
    <p>&nbsp;</p>
    <p>
      <strong>Further Reading:</strong>
      See the <a routerLink="/guide/themeing">Themeing Guide</a> on how to use your custom icon inside a component theme.
    </p>
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesIconingPageComponent {
  guidesDemoData = GuidesDemoData;
  constructor() {
    document.title = `Using Custom Icons > guides > cloukit`;
  }
}
