/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { GuidesDemoData } from '../model/guides-demo-data.model';
import { CloukitThemeService, CloukitStatefulAndModifierAwareElementThemeStyleDefinition } from '@cloukit/theme';
import { CloukitToggleComponentThemeCornered, CloukitToggleComponentThemeDefault } from '@cloukit/toggle';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <div class="demo">
    <h2>Guide to Using Custom Themes</h2>
    <p>
      To explain themeing we will write a custom theme for the <a routerLink="/component/toggle">@cloukit/toggle</a> component.
      Therefore <strong>Smiley-Chan</strong>
      <img src="/assets/images/icon-guide/smiley-chan.svg" style="width:25px;margin-bottom:-4px;"/> will help us out.
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
      With some tiny adjustments we can make a <strong>smiggle</strong> component.
    </p>    
    <p style="padding-left:100px">
      <cloukit-toggle theme="smiggle"></cloukit-toggle>
    </p>
    <p>
      TODO: Explain how createStyle and merge. Explain Icons.
    </p>
  </div>`,
  styles: [].concat(SharedStyles.styles),
})
export class GuidesThemeingPageComponent {
  guidesDemoData = GuidesDemoData;
  constructor(private cloukitThemeService: CloukitThemeService) {
    document.title = `Using Themes > guides > cloukit`;
    this.cloukitThemeService.registerComponentTheme('smiggle', new SmiggleTheme());
  }
}

class SmiggleTheme extends CloukitToggleComponentThemeCornered {
  constructor() {
    super();
    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base').styleDef;
    wrapperToggledBase.style.backgroundColor = '#710ECC';

    const iconLeftToggledBase = this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;
    iconLeftToggledBase.icon.svgPathD = `M256 474c-120.398 0-218-97.602-218-218S135.602
    38 256 38s218 97.602 218 218-97.602 218-218 218zm-83-242c20.435 0
    37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37 16.565 37 37
    37zm163 0c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37
    16.565 37 37 37zm-197 73v41c39 34.91 78 52.367 117 52.367S334 380.91
    373 346v-41c-39.24 24.443-78.24 36.664-117 36.664-38.76 0-77.76-12.22-117-36.664z`;
    iconLeftToggledBase.icon.svgStyle = {
      fill: '#fff',
      fillRule: 'evenodd',
    };
  }
}
