/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-component-info-header',
  template: `
  <div class="info-header">
    <div class="info-header-buttons">
      <span
        class="vendor-logo-link"
        [ngStyle]="getButtonStyle(getStatusSwitchNameForComponentStatus(componentStatus))"
        (mouseover)="hoverStatus(componentStatus)"
        (mouseleave)="resetSwitchState()"
      ><img [src]="getComponentStatusUri()" class="vendor-logo"></span>
      <a
        href="https://www.npmjs.com/package/@cloukit/{{componentName}}"
        target="_blank"
        class="vendor-logo-link"
        [ngStyle]="getButtonStyle('npm')"
        (mouseover)="switchState.npm=true"
        (mouseleave)="resetSwitchState()"
      ><img [src]="getVendorLogo('npm')" class="vendor-logo"></a>
      <a
        href="https://github.com/cloukit/{{componentName}}/tree/{{componentVersion}}"
        target="_blank"
        class="vendor-logo-link"
        [ngStyle]="getButtonStyle('github')"
        (mouseover)="switchState.github=true"
        (mouseleave)="resetSwitchState()"
      ><img [src]="getVendorLogo('github')" class="vendor-logo"></a>
      <a
        href="https://unpkg.com/@cloukit/{{componentName}}@{{componentVersion}}/"
        target="_blank"
        class="vendor-logo-link"
        [ngStyle]="getButtonStyle('unpkg')"
        (mouseover)="switchState.unpkg=true"
        (mouseleave)="resetSwitchState()"
      ><img [src]="getVendorLogo('unpkg')" class="vendor-logo"></a>
      <a
        href="https://cloukit.github.io/{{componentName}}/{{componentVersion}}/documentation/"
        target="_blank"
        class="vendor-logo-link"
        [ngStyle]="getButtonStyle('compodoc')"
        (mouseover)="switchState.compodoc=true"
        (mouseleave)="resetSwitchState()"
      ><img [src]="getVendorLogo('compodoc')" class="vendor-logo"></a>
    </div>
    <div class="info-header-bar" [ngStyle]="getInfoHeaderStyle()">
      <div class="info-header-bar-content">
        <div *ngIf="isSwitchStateOn()">
          {{switchState.statusExperimental ? 'API might change unexpectedly. Use at own risk. It is alive!' : ''}}
          {{switchState.statusStable ? 'API should be stable.' : ''}}
          {{switchState.npm ? 'Show package page on npmjs.com' : ''}}
          {{switchState.github ? 'Show example project on github.com' : ''}}
          {{switchState.unpkg ? 'Show dist contents on unpkg.com' : ''}}
          {{switchState.compodoc ? 'Show detailed Component Documentation' : ''}}
        </div>
      </div>
    </div>
  </div>`,
  styles: [
    '.vendor-logo { width:120px; }',
    '.info-header-bar { height:40px; width:100%; }',
    '.info-header-bar-content { width:100%; padding: 10px; text-align:center; }',
    '.info-header-buttons { display: flex; justify-content: space-between; }',
    '.vendor-logo-link { display:flex; width: 120px; min-width:120px; max-width: 120px; padding:0; height:65px; }',
  ],
})
export class ComponentInfoHeaderComponent {
  @Input()
  componentName: string;

  @Input()
  componentVersion: string;

  @Input()
  componentStatus: string;

  private initialSwitchState = {
    npm: false,
    unpkg: false,
    github: false,
    compodoc: false,
    statusStable: false,
    statusExperimental: false,
  };
  private colors = {
    npm: {
      bg: '#cb3837',
      fg: '#fff',
    },
    unpkg: {
      bg: '#000',
      fg: '#fff',
    },
    github: {
      bg: '#0366d6',
      fg: '#fff',
    },
    compodoc: {
      bg: '#2582d5',
      fg: '#fff',
    },
    statusStable: {
      bg: '#4ad57d',
      fg: '#fff',
    },
    statusExperimental: {
      bg: '#d55900',
      fg: '#fff',
    },
  };
  switchState = Object.assign({}, this.initialSwitchState);

  getSwitchState(name: string) {
    return this.switchState[name] ? 'on' : 'off';
  }

  isSwitchStateOn() {
    for (let pair of _.toPairs(this.switchState)) {
      if (pair[1]) {
        return true;
      }
    }
    return false;
  }

  getOnSwitchName() {
    for (let pair of _.toPairs(this.switchState)) {
      if (pair[1]) {
        return pair[0];
      }
    }
    return null;
  }

  getVendorLogo(name: string) {
    return `/assets/images/vendor-logos/${name}-${this.getSwitchState(name)}.svg`;
  }

  resetSwitchState() {
    this.switchState = Object.assign({}, this.initialSwitchState);
  }

  getButtonStyle(name: string) {
    return this.switchState[name] ? {
      border: `3px solid ${this.colors[name]['bg']}`,
      transition: 'border-color 200ms linear'
    } : {
      border: `3px solid transparent`,
      transition: 'border-color 200ms linear'
    };
  }

  getInfoHeaderStyle() {
    return this.isSwitchStateOn() ? {
      backgroundColor: this.colors[this.getOnSwitchName()]['bg'],
      color: this.colors[this.getOnSwitchName()]['fg'],
      transition: 'background-color 200ms linear'
    } : {
      backgroundColor: 'transparent',
      transition: 'background-color 200ms linear'
    };
  }

  //
  // STATUS
  //

  getStatusSwitchNameForComponentStatus(status: string) {
    if (status === 'STABLE') {
      return 'statusStable';
    }
    if (status === 'EXPERIMENTAL') {
      return 'statusExperimental';
    }
    return null;
  }

  hoverStatus(status: string) {
    if (status === 'STABLE') {
      this.switchState.statusStable = true;
    }
    if (status === 'EXPERIMENTAL') {
      this.switchState.statusExperimental = true;
    }
  }

  getComponentStatusUri() {
    if (this.componentStatus === 'STABLE') {
      if (this.switchState.statusStable) {
        return '/assets/images/status-icons/status-stable-on.svg';
      }
      return '/assets/images/status-icons/status-stable-off.svg';
    }
    if (this.componentStatus === 'EXPERIMENTAL') {
      if (this.switchState.statusExperimental) {
        return '/assets/images/status-icons/status-experimental-on.svg';
      }
      return '/assets/images/status-icons/status-experimental-off.svg';
    }
  }
}
