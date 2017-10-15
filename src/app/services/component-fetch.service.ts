/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ComponentData, ComponentPreviewFile, PackageJson } from '../model/component-data.model';

@Injectable()
export class ComponentFetchService {
  private baseUrl = 'https://cloukit.github.io/';
  private sourceCodeBaseUrl = 'https://github.com/cloukit/';
  private rawFileBaseUrl = 'https://raw.githubusercontent.com/cloukit/';
  private unpkgBaseUrl = 'https://unpkg.com/@cloukit/';

  constructor (private http: Http) {}

  getUnpkgComDistUrl(componentId: string, componentVersion: string): string {
    return `${this.unpkgBaseUrl}${componentId}@${componentVersion}/`;
  }

  getComponent(componentId: string): Observable<ComponentData> {
    return this.http
      .get(`${this.baseUrl}${componentId}/component.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPackageJson(componentId: string, componentVersion: string): Observable<PackageJson> {
    return this.http
      .get(`${this.unpkgBaseUrl}${componentId}@${componentVersion}/package.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTheme(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchSrcFile(componentId, componentVersion, `components/${componentId}.theme.ts`)
      .map(f => { f.sourceCode = f.sourceCode.replace(/[/][*]!(.|[\n\r])*?[*][/]/gm, ''); return f; });
  }
  getPreviewSourceCode(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.component.ts');
  }

  getPreviewTemplate(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.component.html');
  }

  getPreviewModule(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.module.ts')
      .map(f => { f.sourceCode = f.sourceCode.replace(/'..[/]index'/, `@cloukit/${componentId}`); return f; });

  }

  getThemeMarkdown(componentId: string, componentVersion: string): Observable<string> {
    return this.http
      .get(`${this.baseUrl}${componentId}/THEME.md`)
      .map(data => data.text())
      .catch(this.handleError);
  }

  getUsageMarkdown(componentId: string, componentVersion: string): Observable<string> {
    return this.http
      .get(`${this.baseUrl}${componentId}/USAGE.md`)
      .map(data => data.text())
      .catch(this.handleError);
  }

  _fetchSrcFile(componentId: string, componentVersion: string, demoFileName: string): Observable<ComponentPreviewFile> {
    return this.http
      .get(`${this.rawFileBaseUrl}${componentId}/master/src/${demoFileName}`)
      .map(data => new ComponentPreviewFile(
        demoFileName,
        `${this.sourceCodeBaseUrl}${componentId}/tree/${componentVersion}/src/${demoFileName}`,
        data.text()))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
