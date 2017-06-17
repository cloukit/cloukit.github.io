import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="demo">
    <div class="hidden-e2e-hook" id="hidden-e2e-hook">app-works</div>
    <a routerLink="/"><h3>@cloukit</h3></a>
    
    <router-outlet></router-outlet>

  </div>`,
  styles: [
    '.demo { font-family:sans-serif',
    '.hidden-e2e-hook { display: none; }',
  ],
})
export class AppComponent {

}
