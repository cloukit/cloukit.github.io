/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SmiggleTheme } from './app.themes';
import { CloukitThemeService } from '@cloukit/theme';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="app">
    <div class="hidden-e2e-hook" id="hidden-e2e-hook">app-works</div>
    <div class="app-nav" *ngIf="!isHomePage">
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
          Using Custom Themes
        </a>
        <a
          class="app-component-list-item"
          routerLink="/guide/iconing"
          routerLinkActive="app-component-list-item-active"
        >
          Using Custom Icons
        </a>
        <div class="app-nav-heading" routerLink="/component">Components</div>
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
        <a
          class="app-component-list-item"
          routerLink="/component/pagination"
          routerLinkActive="app-component-list-item-active"
        >
          pagination
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/dropout"
          routerLinkActive="app-component-list-item-active"
        >
          dropout
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/tooltip"
          routerLinkActive="app-component-list-item-active"
        >
          tooltip
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/icon"
          routerLinkActive="app-component-list-item-active"
        >
          icon
        </a>
        <a
          class="app-component-list-item"
          routerLink="/component/notification"
          routerLinkActive="app-component-list-item-active"
        >
          notification
        </a>
      </div>
      <div class="app-nav-heading">Techdoc</div>
      <a
        class="app-component-list-item"
        routerLink="/techdoc/module-format-and-build"
        routerLinkActive="app-component-list-item-active"
      >
        Module Format &amp; Build
      </a>
      <a
        class="app-component-list-item"
        routerLink="/techdoc/license"
        routerLinkActive="app-component-list-item-active"
      >
        License &amp; Author
      </a>
      <a
        class="app-component-list-item"
        routerLink="/techdoc/project-state-contributing"
        routerLinkActive="app-component-list-item-active"
      >
        Project State &amp; Contributing
      </a>
    </div>
    <div class="{{isHomePage ? 'app-content-homepage' : 'app-content' }}">
      <router-outlet></router-outlet>
      <div class="app-info">
        <!-- ___BUILDSTAMP___ -->
        <!-- ___COMMIT___ -->
      </div>
    </div>
  </div>`,
  styles: [
    'a { color: #710ECC; text-decoration:none;}',
    'a:hover { color: #9650D7; text-decoration:underline;}',
    '.app { font-family: \'Source Sans Pro\', sans-serif; display:flex; font-size:17px; }',
    '.app-logo-link { text-decoration:none; color:#74276D; font-size:30px; }',
    '.app-nav { width: 250px; min-width: 250px; max-width: 250px; padding:20px; }',
    '.app-nav-heading { text-transform: uppercase; color:#777; padding:5px; margin-top:30px; margin-bottom:10px; }',
    '.app-logo-svg { width:60%; margin: 0 auto; }',
    '.app-content { padding:30px; max-width:1100px; }',
    '.app-content-homepage { width:100%; }',
    '.app-info { color:#777; font-size:12px; padding:8px; text-align:right;  margin-top:50px;}',
    '.app-component-list-item { text-decoration: none; color:#777; padding:10px; display:block; border-bottom:1px solid #ccc; }',
    '.app-component-list-item-active { color:#555; text-decoration:none; font-weight: bold; background-color:#efefef; }',
    '.app-component-list-item:hover { color:#555; text-decoration: none; }',
    '.app-component-list-item-active:hover { text-decoration:none; }',
    '.hidden-e2e-hook { display: none; }',
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private preDestory = new Subject<boolean>();
  public isHomePage = false;
  constructor(private router: Router, private cloukitThemeService: CloukitThemeService) {
    this.cloukitThemeService.registerComponentTheme('smiggle', new SmiggleTheme());
  }

  ngOnInit() {
    this.router.events
      .takeUntil(this.preDestory)
      .subscribe(routerEvent => {
        this.isHomePage = routerEvent instanceof NavigationEnd && routerEvent.url === '/';
      });
  }

  ngOnDestroy() {
    this.preDestory.next(true);
    this.preDestory.complete();
  }
}
