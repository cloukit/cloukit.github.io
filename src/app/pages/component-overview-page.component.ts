/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component } from '@angular/core';
import { SharedStyles } from '../app.styles';

@Component({
  template: `
  <div>
    <h2>Component Overview</h2>
    <table>
      <tbody>
        <tr>
          <td><a routerLink="/component/theme">theme</a></td>
          <td>
            Basic classes and services for themeing components.
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/common">common</a></td>
          <td>
            Common directives that are used by higher level components such as hasFocus and similar.
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/toggle">toggle</a></td>
          <td>
            A toggle component that can be used in an Angular Reactive Form for a boolean.
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/pagination">pagination</a></td>
          <td>
            A pagination component that can be used to paginate huge lists of things.
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/dropout">dropout</a></td>
          <td>
            Dropout is a non visible helper to drop something down, up, left or right relative to a trigger element
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/tooltip">tooltip</a></td>
          <td>
            A simple tooltip component
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/icon">icon</a></td>
          <td>
            A simple icon component
          </td>
        </tr>
        <tr>
          <td><a routerLink="/component/notification">notification</a></td>
          <td>
            Show success, error, info and warn notifications on the page
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
  styles: [].concat(SharedStyles.styles),
})
export class ComponentOverviewPageComponent {

  constructor() {
    document.title = `component overview > cloukit`;
  }
}
