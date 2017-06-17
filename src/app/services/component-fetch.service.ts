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
  private unpkgBaseUrl = 'https://unpkg.com/@cloukit/';

  constructor (private http: Http) {}

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

  getPreviewSourceCode(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchPreviewSourceFile(componentId, componentVersion, 'preview.component.ts');
  }

  getModuleSourceCode(componentId: string, componentVersion: string): Observable<ComponentPreviewFile> {
    return this._fetchPreviewSourceFile(componentId, componentVersion, 'app.module.ts');
  }

  _fetchPreviewSourceFile(componentId: string, componentVersion: string, previewFileName: string): Observable<ComponentPreviewFile> {
     return this.http
        .get(`${this.baseUrl}${componentId}/${componentVersion}/src/${previewFileName}`)
        .map(data => new ComponentPreviewFile(
          previewFileName,
          `${this.sourceCodeBaseUrl}${componentId}/blob/gh-pages/${componentVersion}/src/app.module.ts`,
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
