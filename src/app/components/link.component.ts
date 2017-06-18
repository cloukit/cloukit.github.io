import { Component, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-link',
  template:
    `<a
      [href]="href"
      [ngStyle]="getLinkStyle()"
      (mouseover)="hover=true"
      (mouseleave)="hover=false"
      [target]="getTarget()"
    >{{name}}</a>`,
  styles: [ ],
})
export class LinkComponent {
  @Input()
  href: string;

  @Input()
  name: string;

  @Input()
  external: boolean;

  @Input()
  color: string;

  @Input()
  colorHover: string;

  style = {
    normal: {
      color: '#710ECC',
      textDecoration: 'none',
    },
    hover: {
      color: '#9650D7',
    }
  };
  hover = false;

  constructor() {
    if (!isNullOrUndefined(this.color)) {
      this.style.normal.color = this.color;
    }
    if (!isNullOrUndefined(this.colorHover)) {
      this.style.hover.color = this.colorHover;
    }
  }

  getLinkStyle() {
    return this.hover ? this.style.hover : this.style.normal;
  }

  getTarget() {
    return this.external ? '_blank' : '_self';
  }
}
