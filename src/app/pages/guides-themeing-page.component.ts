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
    <h3>Decomposing the toggle Component</h3>
    <p>
      At first I want to mention that all cloukit components <strong>know about their UI state</strong>.
      What do I mean by that? If you in the "traditional" way of styling with CSS would give
      an element an <code>el:hover</code> style your JS code would not know that a mouseover changes the styling.
      Cloukit elements know about their UI state because it is handled with JS. 
      CSS is only applied directly for an element and <a href="https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes">
      pseudo-classes</a> are not used.      
    </p>
    <p>
      Therefore cloukit uses the following wording:
    </p>
    <table>
      <tr>
        <td style="vertical-align:top"><strong>Component</strong></td>
        <td>is a cloukit Angular Component like like toggle.</td>
      </tr>
      <tr>
        <td style="vertical-align:top"><strong>Element</strong></td>
        <td>is a DOM-element like <code>div</code>, <code>span</code> or <code>svg</code> inside the component.</td>
      </tr>
      <tr>
        <td style="vertical-align:top"><strong>UI State</strong></td>
        <td>
          is the generic state your component is in regarding its UI. A toggle can be <em>toggled</em> or
          <em>untoggled</em>. A textfield could be <em>focused</em> or <em>unfocused</em>. The UI State depends on the component type.
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top"><strong>UI Modifier</strong></td>
        <td>
        is the generic modifier for the state your component is in regarding its UI. 
        While a toggle could be in its UI State <em>toggled</em> it still could be hovered with a mouse
         and this would then for example be the UI modifier <em>hover</em>. Or if the form is disabled
         the UI modifier would be <em>disabled</em>.
        </td>
      </tr>
    </table>
    <p>
      A <strong>cloukit Theme</strong> holds styling information for all elements
      of a component with all permutations of UI States and UI Modifiers. Below you see the example for
      the toggle component.
    </p>
    <p style="text-align: center">
      <img src="/assets/images/guide/toggle-component-decomposed.svg" width="80%" />
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
