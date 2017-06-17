import { Component } from '@angular/core';

@Component({
  template: `
  <div class="demo">
    <h3>HOME</h3>
    Welcome
    <nav>
      <a routerLink="/component/common" routerLinkActive="active">common</a>
    </nav>
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class HomePageComponent {

}
