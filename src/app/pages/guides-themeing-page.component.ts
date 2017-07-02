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
    <h2>Guide: Using Custom Themes</h2>
    <p>
      To explain themeing we will write a custom theme for the <a routerLink="/component/toggle">@cloukit/toggle</a> component.
      Therefore <strong>Poop-Chan</strong>
      <img src="/assets/images/demo/poop-chan.svg" style="width:25px;margin-bottom:-4px;"/> will help us out.
    </p>    
    <p>
      But first we need to understand how cloukit components are composed and how styling is applied.
    </p>
    <p style="text-align: center">
      <img src="/assets/images/cloukit-component-theming.svg" width="80%" />
    </p>
    <h3>Decomposing the toggle Component</h3>
    <p>
      TODO: Show all elements of toggle
    </p>
    <h3>Decomposing the toggle Default Theme</h3>
    <p>
      TODO: Explain how createStyle and merge. Explain Icons.
    </p>
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesThemeingPageComponent {
  guidesDemoData = GuidesDemoData;
  constructor() {
    document.title = `Using Themes > guides > cloukit`;
  }
}
