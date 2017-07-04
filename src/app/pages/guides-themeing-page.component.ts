/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { GuidesDemoData } from '../model/guides-demo-data.model';
import { CloukitThemeService, CloukitStatefulAndModifierAwareElementThemeStyleDefinition } from '@cloukit/theme';
import { CloukitToggleComponentThemeCornered, CloukitToggleComponentThemeDefault } from '@cloukit/toggle';

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
      Ok first lets just use the default theme of the toggle component and adjust it a little.
      With some tiny adjustments we can make a <strong>poople</strong> component.
    </p>    
    <p style="padding-left:100px">
      <cloukit-toggle theme="poople"></cloukit-toggle>
    </p>
    <p>
      TODO: Explain how createStyle and merge. Explain Icons.
    </p>
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class GuidesThemeingPageComponent {
  guidesDemoData = GuidesDemoData;
  constructor(private cloukitThemeService: CloukitThemeService) {
    document.title = `Using Themes > guides > cloukit`;
    this.cloukitThemeService.registerComponentTheme('poople', new PoopleTheme());
  }
}

class PoopleTheme extends CloukitToggleComponentThemeCornered {
  constructor() {
    super();
    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base').styleDef;
    wrapperToggledBase.style.backgroundColor = '#710ECC';

    const iconLeftToggledBase = this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;
    iconLeftToggledBase.icon.svgPathD = `M318.524 272.416c1.595-4.9 2.476-10.277
  2.476-15.916 0-22.92-14.55-41.5-32.5-41.5S256
  233.58 256 256.5s14.55 41.5 32.5 41.5c8.407 0
  16.07-4.076 21.84-10.766-3.465 1.74-7.73 2.766-12.34
  2.766-11.598 0-21-6.492-21-14.5s9.402-14.5 21-14.5c10.065
  0 18.477 4.89 20.524 11.416zm-64.223-2.64c1.103-4.167
  1.7-8.633 1.7-13.276 0-22.92-14.55-41.5-32.5-41.5S191
  233.58 191 256.5s14.55 41.5 32.5 41.5c7.837 0 15.027-3.542
  20.64-9.442-2.763.924-5.864 1.442-9.14 1.442-11.598
  0-21-6.492-21-14.5s9.402-14.5 21-14.5c8.655 0 16.086 3.615
  19.3 8.777zM215.665 167c-15.12-.673-26.165-5.653.482-35.798
  34.866-39.445 76.588-78.396 95.968-60.897-41.262 40.023 12.62
  74.417-7.06 96.695h6.402C339.37 167 362 189.624 362 217.547c0
  15.958-7.398 30.19-18.948 39.453h31.605c27.913 0 50.54 22.624
  50.54 50.547 0 21.782-13.78 40.347-33.093 47.453h39.204c27.916
  0 50.546 22.624 50.546 50.547 0 27.916-22.64 50.547-50.546
  50.547H80.545C52.63 456.094 30 433.47 30 405.547 30 377.63
  52.64 355 80.545 355h39.544C100.775 347.895 87 329.333 87
  307.547 87 279.63 109.633 257 137.54 257h31.402C157.394
  247.737 150 233.508 150 217.547 150 189.63 172.637 167
  200.544 167h15.12zM257 358.364c47.968 1.436 82.613-42.847
  82.613-14.46 0 67.008-201.943 66.04-162.507 6.996 0-43.625
  31.924 6.028 79.893 7.464z`;
    iconLeftToggledBase.icon.svgStyle = {
      fill: '#fff',
      fillRule: 'evenodd',
    };
  }
}
