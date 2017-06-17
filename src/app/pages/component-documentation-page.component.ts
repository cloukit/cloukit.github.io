import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-documentation-page',
  template: `
  <div class="demo">
    {{componentId}}
  </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class ComponentDocumentationPageComponent implements OnInit {
  componentId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.componentId = params['componentId']);
  }

}
