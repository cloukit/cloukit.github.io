import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="demo">
    <a href="/"><h3>@cloukit</h3></a>
    
    <router-outlet></router-outlet>

  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class AppComponent {

}
