import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <div class="hidden-e2e-hook" id="hidden-e2e-hook">app-works</div>
    <div class="app-nav">
      <a routerLink="/" class="app-logo"><h3>cloukit</h3></a>
      
      <div class="app-component-list">
        <a
          class="app-component-list-item"
          routerLink="/component/common"
          routerLinkActive="app-component-list-item-active"
        >
          common
        </a>
      </div>

      <div class="app-info">
        <a href="https://codeclou.io/legal/impressum/">Imprint / Impressum</a>
        <br>
        <a href="https://codeclou.io/legal/datenschutz/">Data Privacy / Datenschutzerklärung</a>
        <br>
        ___BUILDSTAMP___
        <!-- ___COMMIT___ -->
      </div>
    </div>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
    
  </div>`,
  styles: [
    '.app { font-family:sans-serif; display:flex; }',
    '.app-logo { text-decoration:none; color:#74276D; font-size:30px; }',
    '.app-nav { width: 300px; padding:20px; }',
    '.app-content { padding:30px; }',
    '.app-info { position: fixed; bottom:0px; color:#777; font-size:12px; padding:8px; }',
    '.app-component-list-item { text-decoration: none; color:#777; padding:10px; display:block; border-bottom:1px solid #ccc; }',
    '.app-component-list-item-active { color:#555; font-weight: bold; background-color:#efefef; }',
    '.hidden-e2e-hook { display: none; }',
  ],
})
export class AppComponent {

}
