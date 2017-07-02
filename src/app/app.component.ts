/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="app">
    <div class="hidden-e2e-hook" id="hidden-e2e-hook">app-works</div>
    <div class="app-nav">
      <a routerLink="/" class="app-logo-link">
        <img src="/assets/images/cloukit-logo-square.svg" class="app-logo-svg" />
      </a>
      
      <div class="app-component-list">
        <div class="app-nav-heading">Guides</div>
        <a
          class="app-component-list-item"
          routerLink="/guide/themeing"
          routerLinkActive="app-component-list-item-active"
        >
          Using Themes
        </a>
        <div class="app-nav-heading">Components</div>
        <a
          class="app-component-list-item"
          routerLink="/component/theme"
          routerLinkActive="app-component-list-item-active"
        >
          theme
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/common"
          routerLinkActive="app-component-list-item-active"
        >
          common
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/toggle"
          routerLinkActive="app-component-list-item-active"
        >
          toggle
        </a>
      </div>

      <div class="app-info">
        <p>
          <app-link
            href="https://codeclou.io/legal/impressum/"
            name="Imprint / Impressum"
            external="true"
          ></app-link>
        </p>
        <p>
          <app-link
            href="https://codeclou.io/legal/datenschutz/"
            name="Data Privacy / Datenschutzerklärung"
            external="true"
          ></app-link>
        </p>
        <p>
          ___BUILDSTAMP___
        </p>        
        <!-- ___COMMIT___ -->
      </div>
    </div>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
    
  </div>`,
  styles: [
    'a { color: #710ECC; text-decoration:none;}',
    'a:hover { color: #9650D7; text-decoration:underline;}',
    '.app { font-family: \'Source Sans Pro\', sans-serif; display:flex; font-size:17px; }',
    '.app-logo-link { text-decoration:none; color:#74276D; font-size:30px; }',
    '.app-nav { width: 300px; padding:20px; }',
    '.app-nav-heading { text-transform: uppercase; color:#777; padding:5px; margin-top:30px; margin-bottom:10px; }',
    '.app-logo-svg { width:60%; margin: 0 auto; }',
    '.app-content { padding:30px; }',
    '.app-info { position: fixed; bottom:0px; color:#777; font-size:12px; padding:8px; }',
    '.app-component-list-item { text-decoration: none; color:#777; padding:10px; display:block; border-bottom:1px solid #ccc; }',
    '.app-component-list-item-active { color:#555; text-decoration:none; font-weight: bold; background-color:#efefef; }',
    '.app-component-list-item:hover { color:#555; text-decoration: none; }',
    '.app-component-list-item-active:hover { text-decoration:none; }',
    '.hidden-e2e-hook { display: none; }',
  ],
})
export class AppComponent {

}
