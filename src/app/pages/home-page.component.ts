/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <div class="teaserRow">
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-logo">
        <img src="/assets/images/cloukit-logo-square.svg" class="logo" />
      </div>
    </div>
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-seven isLink" routerLink="/component">
        Components
      </div>
   </div>
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-five isLink" routerLink="/guide/iconing">
        Icons
      </div>
    </div>
  </div>
  <div class="teaserRow">
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-two isLink" routerLink="/guide/themeing">
        Themeing
      </div>
    </div>
    <div class="teaserCol2">
      <div class="teaserBox teaserBox-three teaserText">
        Reusable Components for Angular 4+<br>
          100% Angular<br>
          100% Typescript<br>
          100% ngStyle CSS in JS<br>
          100% Themeable
      </div>
    </div>
  </div>
  <div class="teaserRow">
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-four isLink" routerLink="/techdoc/project-state-contributing">
        Project State & Contributing
      </div>
    </div>
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-one isLink" routerLink="/techdoc/module-format-and-build">
        Module Format and Build
      </div>
    </div>
    <div class="teaserCol1">
      <div class="teaserBox teaserBox-six isLink" routerLink="/techdoc/license">
        License and Author
      </div>
    </div>
  </div>
  `,
  styles: [
    '.teaserRow { display:flex; margin: 0 auto; max-width:1200px; flex-wrap: wrap; min-height:320px; }',
    '.teaserCol1 { flex: 1; }',
    '.teaserCol2 { flex: 2;}',
    '.teaserBox { padding:20px; min-width: 300px; height:100%; min-height:280px; }',
    '.teaserBox-logo { background-color:#efefef; color: #fff; text-align:center; }',
    '.teaserBox-logo:hover { background-color:#fff;}',
    '.logo { width:300px; }',
    '.teaserBox-one { background-color:#D600A1; color: #fff; }',
    '.teaserBox-one:hover { background-color:#C50094; color: #fff; }',
    '.teaserBox-two { background-color:#BAF700; color: #fff; }',
    '.teaserBox-two:hover { background-color:#9DCE08; color: #fff; }',
    '.teaserBox-three { background-color:#FFF200; color: #333; }',
    '.teaserBox-three:hover { background-color:#F4E700; color: #333; }',
    '.teaserBox-four { background-color:#710ECC; color: #fff; }',
    '.teaserBox-four:hover { background-color:#650DB6; color: #fff; }',
    '.teaserBox-five { background-color:#513FD3; color: #fff; }',
    '.teaserBox-five:hover { background-color:#3927B6; color: #fff; }',
    '.teaserBox-six { background-color:#03ABC2; color: #fff; }',
    '.teaserBox-six:hover { background-color:#0394A8; color: #fff; }',
    '.teaserBox-seven { background-color:#FF9431; color: #fff; }',
    '.teaserBox-seven:hover { background-color:#E37F23; color: #fff; }',
    '.teaserText { font-size:1.8rem; font-family: \'Source Sans Pro\', sans-serif; font-weight: 300; line-height:2.8rem; }',
    '.isLink { cursor:pointer; }',
  ].concat(SharedStyles.styles),
})
export class HomePageComponent {

  constructor() {
    document.title = `welcome to cloukit`;
  }

}
