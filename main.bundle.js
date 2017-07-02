webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"app\">\n    <div class=\"hidden-e2e-hook\" id=\"hidden-e2e-hook\">app-works</div>\n    <div class=\"app-nav\">\n      <a routerLink=\"/\" class=\"app-logo-link\">\n        <img src=\"/assets/images/cloukit-logo-square.svg\" class=\"app-logo-svg\" />\n      </a>\n      \n      <div class=\"app-component-list\">\n        <div class=\"app-nav-heading\">Guides</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/guide/themeing\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          Using Themes\n        </a>\n        <div class=\"app-nav-heading\">Components</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/theme\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          theme\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/common\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          common\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/toggle\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          toggle\n        </a>\n      </div>\n\n      <div class=\"app-info\">\n        <p>\n          <app-link\n            href=\"https://codeclou.io/legal/impressum/\"\n            name=\"Imprint / Impressum\"\n            external=\"true\"\n          ></app-link>\n        </p>\n        <p>\n          <app-link\n            href=\"https://codeclou.io/legal/datenschutz/\"\n            name=\"Data Privacy / Datenschutzerkl\u00E4rung\"\n            external=\"true\"\n          ></app-link>\n        </p>\n        <p>\n          123\n        </p>        \n        <!-- bc77de0a230227821ed0887115e207b1b9cc0c1f -->\n      </div>\n    </div>\n    <div class=\"app-content\">\n      <router-outlet></router-outlet>\n    </div>\n    \n  </div>",
        styles: [
            'a { color: #710ECC; text-decoration:none;}',
            'a:hover { color: #9650D7; text-decoration:underline;}',
            '.app { font-family: \'Source Sans Pro\', sans-serif; display:flex; font-size:17px; }',
            '.app-logo-link { text-decoration:none; color:#74276D; font-size:30px; }',
            '.app-nav { width: 300px; padding:20px; }',
            '.app-nav-heading { text-transform: uppercase; color:#777; padding:5px; margin-top:30px; margin-bottom:10px; }',
            '.app-logo-svg { width:60%; margin: 0 auto; }',
            '.app-content { padding:30px; }',
            '.app-info { position: fixed; bottom:0px; color:#777; font-size:12px; padding:8px; }',
            '.app-component-list-item { text-decoration: none; color:#777; padding:10px; display:block; border-bottom:1px solid #ccc; }',
            '.app-component-list-item-active { color:#555; text-decoration:none; font-weight: bold; background-color:#efefef; }',
            '.app-component-list-item:hover { color:#555; text-decoration: none; }',
            '.app-component-list-item-active:hover { text-decoration:none; }',
            '.hidden-e2e-hook { display: none; }',
        ],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_component_documentation_component__ = __webpack_require__("../../../../../src/app/components/component-documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__ = __webpack_require__("../../../../../src/app/pages/component-documentation-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_not_found_page_component__ = __webpack_require__("../../../../../src/app/pages/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_component_fetch_service__ = __webpack_require__("../../../../../src/app/services/component-fetch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_pipes_save_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/save-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_source_code_box__ = __webpack_require__("../../../../../src/app/components/source-code-box.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_preview_file_code_box__ = __webpack_require__("../../../../../src/app/components/preview-file-code-box.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_link_component__ = __webpack_require__("../../../../../src/app/components/link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_markdown_box__ = __webpack_require__("../../../../../src/app/components/markdown-box.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_pages_guides_themeing_page_component__ = __webpack_require__("../../../../../src/app/pages/guides-themeing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_component_info_header_component__ = __webpack_require__("../../../../../src/app/components/component-info-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_components_prism_css_wrapper_component__ = __webpack_require__("../../../../../src/app/components/prism-css-wrapper.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




















var appRoutes = [
    { path: 'guide/themeing', component: __WEBPACK_IMPORTED_MODULE_17_app_pages_guides_themeing_page_component__["a" /* GuidesThemeingPageComponent */] },
    { path: 'component/:componentId', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: 'component/:componentId/:componentVersion', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_page_component__["a" /* HomePageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_not_found_page_component__["a" /* NotFoundPageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_component_documentation_component__["a" /* ComponentDocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_not_found_page_component__["a" /* NotFoundPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_pipes_save_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_source_code_box__["a" /* SourceCodeBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_preview_file_code_box__["a" /* PreviewFileBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_link_component__["a" /* LinkComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_markdown_box__["a" /* MarkdownBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_17_app_pages_guides_themeing_page_component__["a" /* GuidesThemeingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_component_info_header_component__["a" /* ComponentInfoHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19_app_components_prism_css_wrapper_component__["a" /* PrismCssWrapperComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_component_fetch_service__["a" /* ComponentFetchService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/component-documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDocumentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */





var ComponentDocumentationComponent = (function () {
    function ComponentDocumentationComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.componentVersionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ComponentDocumentationComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.selectedVersion = this.componentVersion;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.componentData)) {
            this.currentVersion = this.componentData.versions.filter(function (v) { return v.version === _this.selectedVersion; })[0];
        }
        this.iframeDocUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://cloukit.github.io/" + this.componentId + "/example/" + this.componentVersion + "/");
    };
    ComponentDocumentationComponent.prototype.changeComponentVersion = function () {
        this.componentVersionChange.emit(this.selectedVersion);
    };
    ComponentDocumentationComponent.prototype.toPairs = function (obj) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.toPairs(obj);
    };
    return ComponentDocumentationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentVersion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentData */]) === "function" && _a || Object)
], ComponentDocumentationComponent.prototype, "componentData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */]) === "function" && _b || Object)
], ComponentDocumentationComponent.prototype, "componentPreviewModuleSource", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */]) === "function" && _c || Object)
], ComponentDocumentationComponent.prototype, "componentPreviewTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */]) === "function" && _d || Object)
], ComponentDocumentationComponent.prototype, "componentPreviewSource", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */]) === "function" && _e || Object)
], ComponentDocumentationComponent.prototype, "packageJson", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentDistUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "usageMarkdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], ComponentDocumentationComponent.prototype, "componentVersionChange", void 0);
ComponentDocumentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-component-documentation',
        template: "\n  <div class=\"component\" *ngIf=\"componentData?.versions\">\n    <div class=\"component-row component-row--no-border\">\n      <div class=\"component-header\">\n        <div class=\"component-headline\">\n          @cloukit/{{componentId}}\n          <select\n            [(ngModel)]=\"selectedVersion\"\n            (change)=\"changeComponentVersion()\"\n            class=\"selectbox\"\n          >\n            <option\n              *ngFor=\"let version of componentData.versions; index as i;\"\n              [value]=\"version.version\"\n            >\n              {{version.version}}\n            </option>\n          </select>\n        </div>\n        <div class=\"component-description\">\n          {{packageJson ? packageJson.description : ''}}\n        </div>\n      </div>\n    </div>\n    <div class=\"component-row component-row--no-border\">\n      <app-component-info-header\n        [componentName]=\"componentId\"\n        [componentVersion]=\"componentVersion\"\n        [componentStatus]=\"componentData.status\"\n        style=\"width:100%\"\n      >\n      </app-component-info-header>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        installation\n      </div>\n      <div class=\"component-col p-bt-0\">\n        <pre class=\"shell\">npm install --save @cloukit/{{componentId}}</pre><br>\n        <pre class=\"shell\">yarn add @cloukit/{{componentId}}</pre>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        example project<br>preview\n      </div>\n      <div class=\"component-col\">\n        <iframe\n          *ngIf=\"iframeDocUrl\"\n          [src]=\"iframeDocUrl\"\n          width=\"100%\"\n          height=\"400\"\n          class=\"preview-iframe\"\n        ></iframe>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        usage detail\n      </div>\n      <div class=\"component-col\">\n        <app-markdown-box\n          [markdown]=\"usageMarkdown\"\n        ></app-markdown-box>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let dependency of toPairs(packageJson.dependencies); index as i;\">\n            <td class=\"table-td\">{{dependency[0]}}</td>\n            <td class=\"table-td\">{{dependency[1]}}</td> \n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        peer dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let peerDependency of toPairs(packageJson.peerDependencies); index as i;\">\n            <td class=\"table-td\">{{peerDependency[0]}}</td>\n            <td class=\"table-td\">{{peerDependency[1]}}</td> \n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        example project<br>source\n      </div>\n      <div class=\"component-col\">\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentPreviewModuleSource\"\n        ></app-preview-file-code-box>\n        <app-preview-file-code-box\n          language=\"html\"\n          [previewFile]=\"componentPreviewTemplate\"\n        ></app-preview-file-code-box>\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentPreviewSource\"\n        ></app-preview-file-code-box>\n      </div>\n    </div>\n\n  </div>",
        styles: [
            '.component-row { display:flex; margin-bottom:10px; padding:10px; border-bottom:1px solid #ccc; }',
            '.component-row--no-border { border-bottom:0px; }',
            '.component-col { margin-right:20px; min-width:700px; }',
            '.component-col-heading { min-width:150px; max-width:200px; font-weight:bold; }',
            '.component-header { display:block; }',
            '.component-headline { font-size:30px; margin-bottom:8px;}',
            '.component-description { font-size:20px; margin-bottom:20px; }',
            '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
            '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
            '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #272822; }',
            '.preview-iframe { border:1px solid #ccc; }',
            '.table { font-family:monospace; }',
            '.table-td { padding:3px; }',
        ],
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
], ComponentDocumentationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=component-documentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/component-info-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentInfoHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var ComponentInfoHeaderComponent = (function () {
    function ComponentInfoHeaderComponent() {
        this.initialSwitchState = {
            npm: false,
            unpkg: false,
            github: false,
            compodoc: false,
            statusStable: false,
            statusExperimental: false,
        };
        this.colors = {
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
        this.switchState = Object.assign({}, this.initialSwitchState);
    }
    ComponentInfoHeaderComponent.prototype.getSwitchState = function (name) {
        return this.switchState[name] ? 'on' : 'off';
    };
    ComponentInfoHeaderComponent.prototype.isSwitchStateOn = function () {
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_1_lodash__["toPairs"](this.switchState); _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair[1]) {
                return true;
            }
        }
        return false;
    };
    ComponentInfoHeaderComponent.prototype.getOnSwitchName = function () {
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_1_lodash__["toPairs"](this.switchState); _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair[1]) {
                return pair[0];
            }
        }
        return null;
    };
    ComponentInfoHeaderComponent.prototype.getVendorLogo = function (name) {
        return "/assets/images/vendor-logos/" + name + "-" + this.getSwitchState(name) + ".svg";
    };
    ComponentInfoHeaderComponent.prototype.resetSwitchState = function () {
        this.switchState = Object.assign({}, this.initialSwitchState);
    };
    ComponentInfoHeaderComponent.prototype.getButtonStyle = function (name) {
        return this.switchState[name] ? {
            border: "3px solid " + this.colors[name]['bg'],
            transition: 'border-color 200ms linear'
        } : {
            border: "3px solid transparent",
            transition: 'border-color 200ms linear'
        };
    };
    ComponentInfoHeaderComponent.prototype.getInfoHeaderStyle = function () {
        return this.isSwitchStateOn() ? {
            backgroundColor: this.colors[this.getOnSwitchName()]['bg'],
            color: this.colors[this.getOnSwitchName()]['fg'],
            transition: 'background-color 200ms linear'
        } : {
            backgroundColor: 'transparent',
            transition: 'background-color 200ms linear'
        };
    };
    //
    // STATUS
    //
    ComponentInfoHeaderComponent.prototype.getStatusSwitchNameForComponentStatus = function (status) {
        if (status === 'STABLE') {
            return 'statusStable';
        }
        if (status === 'EXPERIMENTAL') {
            return 'statusExperimental';
        }
        return null;
    };
    ComponentInfoHeaderComponent.prototype.hoverStatus = function (status) {
        if (status === 'STABLE') {
            this.switchState.statusStable = true;
        }
        if (status === 'EXPERIMENTAL') {
            this.switchState.statusExperimental = true;
        }
    };
    ComponentInfoHeaderComponent.prototype.getComponentStatusUri = function () {
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
    };
    return ComponentInfoHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentVersion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentStatus", void 0);
ComponentInfoHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-component-info-header',
        template: "\n  <div class=\"info-header\">\n    <div class=\"info-header-buttons\">\n    \n      <span\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle(getStatusSwitchNameForComponentStatus(componentStatus))\"\n        (mouseover)=\"hoverStatus(componentStatus)\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getComponentStatusUri()\" class=\"vendor-logo\"></span>\n      <a\n        href=\"https://www.npmjs.com/package/@cloukit/{{componentName}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('npm')\"\n        (mouseover)=\"switchState.npm=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('npm')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://github.com/cloukit/{{componentName}}/tree/gh-pages/example/{{componentVersion}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('github')\"\n        (mouseover)=\"switchState.github=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('github')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://unpkg.com/@cloukit/{{componentName}}@{{componentVersion}}/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('unpkg')\"\n        (mouseover)=\"switchState.unpkg=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('unpkg')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://cloukit.github.io/{{componentName}}/component-doc/{{componentVersion}}/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('compodoc')\"\n        (mouseover)=\"switchState.compodoc=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('compodoc')\" class=\"vendor-logo\"></a>\n    </div>\n    <div class=\"info-header-bar\" [ngStyle]=\"getInfoHeaderStyle()\">\n      <div class=\"info-header-bar-content\">\n        <div *ngIf=\"isSwitchStateOn()\">\n          {{switchState.statusExperimental ? 'API might change unexpectedly. Use at own risk. It is alive!' : ''}}\n          {{switchState.statusStable ? 'API should be stable.' : ''}}\n          {{switchState.npm ? 'Show package page on npmjs.com' : ''}}\n          {{switchState.github ? 'Show example project on github.com' : ''}}\n          {{switchState.unpkg ? 'Show dist contents on unpkg.com' : ''}}\n          {{switchState.compodoc ? 'Show detailed Component Documentation' : ''}}\n        </div>\n      </div>\n    </div>\n  </div>",
        styles: [
            '.vendor-logo { width:120px; }',
            '.info-header-bar { height:40px; width:100%; }',
            '.info-header-bar-content { width:100%; padding: 10px; text-align:center; }',
            '.info-header-buttons { display: flex; justify-content: space-between; }',
            '.vendor-logo-link { display:flex; width: 120px; min-width:120px; max-width: 120px; padding:0; height:65px; }',
        ],
    })
], ComponentInfoHeaderComponent);

//# sourceMappingURL=component-info-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var LinkComponent = (function () {
    function LinkComponent() {
        this.style = {
            normal: {
                color: '#710ECC',
                textDecoration: 'none',
            },
            hover: {
                color: '#9650D7',
            }
        };
        this.hover = false;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.color)) {
            this.style.normal.color = this.color;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.colorHover)) {
            this.style.hover.color = this.colorHover;
        }
    }
    LinkComponent.prototype.getLinkStyle = function () {
        return this.hover ? this.style.hover : this.style.normal;
    };
    LinkComponent.prototype.getTarget = function () {
        return this.external ? '_blank' : '_self';
    };
    return LinkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], LinkComponent.prototype, "external", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "colorHover", void 0);
LinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-link',
        template: "<a\n      [href]=\"href\"\n      [ngStyle]=\"getLinkStyle()\"\n      (mouseover)=\"hover=true\"\n      (mouseleave)=\"hover=false\"\n      [target]=\"getTarget()\"\n    >{{name}}</a>",
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], LinkComponent);

//# sourceMappingURL=link.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/markdown-box.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown__ = __webpack_require__("../../../../showdown/dist/showdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_showdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__ = __webpack_require__("../../../../prismjs/components/prism-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var showdownPrism = function () {
    return {
        type: 'html',
        filter: function (text, converter, options) {
            var isCodeBoxRegex = /<pre><code class="([a-zA-Z0-9]+) language\-(.*?)">([\s\S]*?)<\/code><\/pre>/g;
            var html = text;
            var isCodeBoxResults = text.match(isCodeBoxRegex);
            var isCodeBoxRegex2 = new RegExp(/<pre><code class="([a-zA-Z0-9]+) language\-(.*?)">([\s\S]*?)<\/code><\/pre>/g, 'i');
            if (isCodeBoxResults && isCodeBoxResults.length > 0) {
                for (var i = 0; i < isCodeBoxResults.length; i++) {
                    var result = isCodeBoxRegex2.exec(isCodeBoxResults[i]);
                    var language = result[1];
                    language = language.toLowerCase();
                    var code = result[3];
                    code = code
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&amp;/g, '&');
                    var grammar = __WEBPACK_IMPORTED_MODULE_2_prismjs__["languages"][language];
                    var highlightedCode = __WEBPACK_IMPORTED_MODULE_2_prismjs__["highlight"](code, grammar, language);
                    var highlightedHtml = "<pre class=\"language-" + language + "\"><code class=\"language-" + language + "\">" + highlightedCode + "</code></pre>";
                    html = html.replace(result.input, highlightedHtml);
                }
            }
            return html;
        }
    };
};
var MarkdownBoxComponent = (function () {
    function MarkdownBoxComponent() {
        __WEBPACK_IMPORTED_MODULE_1_showdown__["extension"]('showdown-prism', showdownPrism);
        this.converter = new __WEBPACK_IMPORTED_MODULE_1_showdown__["Converter"]({ extensions: ['showdown-prism'] });
        this.converter.setFlavor('github');
    }
    MarkdownBoxComponent.prototype.ngOnChanges = function () {
        this.markdownHtml = this.converter.makeHtml(this.markdown);
    };
    return MarkdownBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], MarkdownBoxComponent.prototype, "markdown", void 0);
MarkdownBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-markdown-box',
        template: "\n  <app-prism-css-wrapper>\n    <div\n      class=\"markdown-box\"\n      [innerHtml]=\"markdownHtml | safeHtml\"\n    ></div>\n  </app-prism-css-wrapper>",
        styles: [
            '.markdown-box {  }',
            '.markdown-box pre { background-color:#555; padding:5px 10px 5px 10px; }',
        ],
    }),
    __metadata("design:paramtypes", [])
], MarkdownBoxComponent);

//# sourceMappingURL=markdown-box.js.map

/***/ }),

/***/ "../../../../../src/app/components/preview-file-code-box.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewFileBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var PreviewFileBoxComponent = (function () {
    function PreviewFileBoxComponent() {
    }
    return PreviewFileBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PreviewFileBoxComponent.prototype, "language", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentPreviewFile */]) === "function" && _a || Object)
], PreviewFileBoxComponent.prototype, "previewFile", void 0);
PreviewFileBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-preview-file-code-box',
        template: "\n  <div class=\"code-box\" *ngIf=\"previewFile\">\n    <div class=\"code-header\">\n      <a\n        [href]=\"previewFile.fileUrl\"\n        target=\"_blank\"\n        class=\"code-link\"\n      >\n        {{previewFile.filename}}\n      </a>\n    </div>\n    <div class=\"code-source\">\n      <app-source-code-box\n        [language]=\"language\"\n        [code]=\"previewFile.sourceCode\"\n      ></app-source-code-box>\n    </div>\n  </div>",
        styles: [
            '.code-box { font-size:14px; }',
            '.code-header { background-color:#555555; color:#fff; margin:0; padding:10px 15px 10px 15px;}',
            '.code-link { color: #fff; text-decoration:none; font-size:16px; }',
            '.code-source { background-color:#272822; margin-top:-7px; }',
        ],
    })
], PreviewFileBoxComponent);

var _a;
//# sourceMappingURL=preview-file-code-box.js.map

/***/ }),

/***/ "../../../../../src/app/components/prism-css-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismCssWrapperComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+typescript */
var PrismCssWrapperComponent = (function () {
    function PrismCssWrapperComponent() {
    }
    return PrismCssWrapperComponent;
}());
PrismCssWrapperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-prism-css-wrapper',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"prism-css-wrapper\">\n    <ng-content></ng-content>\n  </div>",
        styles: ["\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: 'Roboto Mono', monospace;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n    \n      -moz-tab-size: 4;\n      tab-size: 4;\n    \n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n    \n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: .5em 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n    \n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n    \n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: .1em;\n      border-radius: .3em;\n      white-space: normal;\n    }\n    \n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n    \n    .token.punctuation {\n      color: #f8f8f2;\n    }\n    \n    .namespace {\n      opacity: .7;\n    }\n    \n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #C076F3;\n    }\n    \n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n    \n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n    \n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n    \n    .token.atrule,\n    .token.attr-value,\n    .token.function {\n      color: #e6db74;\n    }\n    \n    .token.keyword {\n      color: #66d9ef;\n    }\n    \n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n    \n    .token.important,\n    .token.bold {\n      font-weight: 700;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n    \n    .token.entity {\n      cursor: help;\n    }\n  "],
    })
], PrismCssWrapperComponent);

//# sourceMappingURL=prism-css-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/source-code-box.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown__ = __webpack_require__("../../../../prismjs/components/prism-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceCodeBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */





var SourceCodeBoxComponent = (function () {
    function SourceCodeBoxComponent() {
    }
    SourceCodeBoxComponent.prototype.ngOnChanges = function () {
        this.codePreview = __WEBPACK_IMPORTED_MODULE_1_prismjs__["highlight"](this.code, __WEBPACK_IMPORTED_MODULE_1_prismjs__["languages"][this.language]);
    };
    SourceCodeBoxComponent.prototype.getLanguage = function () {
        return "language-" + this.language;
    };
    return SourceCodeBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SourceCodeBoxComponent.prototype, "language", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SourceCodeBoxComponent.prototype, "code", void 0);
SourceCodeBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-source-code-box',
        template: "\n  <app-prism-css-wrapper>\n    <div class=\"code-box\">\n      <pre \n        [class]=\"getLanguage()\"><code \n        [class]=\"getLanguage()\"\n        [innerHtml]=\"codePreview | safeHtml\"></code></pre>\n    </div>\n  </app-prism-css-wrapper>",
        styles: ['.code-box { font-size:14px; }'],
    })
], SourceCodeBoxComponent);

//# sourceMappingURL=source-code-box.js.map

/***/ }),

/***/ "../../../../../src/app/model/component-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentData; });
/* unused harmony export ComponentDataVersion */
/* unused harmony export Theme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentPreviewFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PackageJson; });
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
var ComponentData = (function () {
    function ComponentData() {
    }
    return ComponentData;
}());

var ComponentDataVersion = (function () {
    function ComponentDataVersion() {
    }
    return ComponentDataVersion;
}());

var Theme = (function () {
    function Theme() {
    }
    return Theme;
}());

var ComponentPreviewFile = (function () {
    function ComponentPreviewFile(filename, fileUrl, sourceCode) {
        this.filename = filename;
        this.fileUrl = fileUrl;
        this.sourceCode = sourceCode;
    }
    return ComponentPreviewFile;
}());

var PackageJson = (function () {
    function PackageJson() {
    }
    return PackageJson;
}());

//# sourceMappingURL=component-data.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component-documentation-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__ = __webpack_require__("../../../../../src/app/services/component-fetch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semver__ = __webpack_require__("../../../../semver/semver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDocumentationPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */





var ComponentDocumentationPageComponent = (function () {
    function ComponentDocumentationPageComponent(route, router, componentFetchService) {
        this.route = route;
        this.router = router;
        this.componentFetchService = componentFetchService;
    }
    ComponentDocumentationPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.paramComponentId = params['componentId'];
            _this.paramComponentVersion = params['componentVersion'];
            document.title = _this.paramComponentId + " > component > cloukit";
            _this.componentFetchService
                .getComponent(_this.paramComponentId)
                .subscribe(function (componentData) { return _this.setComponentData(componentData); }, function (error) { return _this.errorMessage = error; });
        });
    };
    ComponentDocumentationPageComponent.prototype.setComponentData = function (componentData) {
        var _this = this;
        this.componentData = componentData;
        var highestVersion = __WEBPACK_IMPORTED_MODULE_3_semver__["maxSatisfying"](this.componentData.versions.map(function (v) { return v.version; }), '*');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.paramComponentVersion) ||
            componentData.versions.filter(function (v) { return v.version === _this.paramComponentVersion; }).length === 0) {
            console.log('redirecting to highest version', highestVersion);
            this.router.navigate(['/component', this.paramComponentId, highestVersion]);
        }
        else {
            this.componentDistUrl = this.componentFetchService.getUnpkgComDistUrl(this.paramComponentId, this.paramComponentVersion);
            this.componentFetchService
                .getModuleSourceCode(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (componentPreviewModuleSource) { return _this.componentPreviewModuleSource = componentPreviewModuleSource; }, function (error) { return _this.errorMessage = error; });
            this.componentFetchService
                .getPreviewSourceCode(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (componentPreviewSource) { return _this.componentPreviewSource = componentPreviewSource; }, function (error) { return _this.errorMessage = error; });
            this.componentFetchService
                .getPreviewTemplate(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (data) { return _this.componentPreviewTemplate = data; }, function (error) { return _this.errorMessage = error; });
            this.componentFetchService
                .getPackageJson(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (packageJson) { return _this.packageJson = packageJson; }, function (error) { return _this.errorMessage = error; });
            this.componentFetchService
                .getUsageMarkdown(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (markdown) { return _this.usageMarkdown = markdown; }, function (error) { return _this.errorMessage = error; });
        }
    };
    ComponentDocumentationPageComponent.prototype.handleComponentVersionChange = function (componentVersion) {
        console.log('redirecting to selected version', componentVersion);
        this.router.navigate(['/component', this.paramComponentId, componentVersion]);
    };
    return ComponentDocumentationPageComponent;
}());
ComponentDocumentationPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-component-documentation-page',
        template: "\n  <div>\n    <app-component-documentation\n      [componentId]=\"paramComponentId\"\n      [componentVersion]=\"paramComponentVersion\"\n      [componentData]=\"componentData\"\n      [componentPreviewModuleSource]=\"componentPreviewModuleSource\"\n      [componentPreviewSource]=\"componentPreviewSource\"\n      [componentPreviewTemplate]=\"componentPreviewTemplate\"\n      [packageJson]=\"packageJson\"\n      [componentDistUrl]=\"componentDistUrl\"\n      [usageMarkdown]=\"usageMarkdown\"\n      (componentVersionChange)=\"handleComponentVersionChange($event)\"\n    ></app-component-documentation>\n    {{errorMessage}}\n  </div>",
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */]) === "function" && _c || Object])
], ComponentDocumentationPageComponent);

var _a, _b, _c;
//# sourceMappingURL=component-documentation-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/guides-themeing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesThemeingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var GuidesThemeingPageComponent = (function () {
    function GuidesThemeingPageComponent() {
        document.title = "Using Themes > guides > cloukit";
    }
    return GuidesThemeingPageComponent;
}());
GuidesThemeingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "\n  <div class=\"demo\">\n    <p>\n      to be done\n    </p>    \n    \n    \n    <p>&nbsp;</p>\n    <h4>Component Theming</h4>\n    <p>We will theme our Components via ngStyle and certain techniques. Therefore the following concept applies:</p>\n    <p><img src=\"/assets/images/cloukit-component-theming.svg\" width=\"80%\" /></p>\n    \n  </div>",
        styles: ['.demo { font-family:sans-serif'],
    }),
    __metadata("design:paramtypes", [])
], GuidesThemeingPageComponent);

//# sourceMappingURL=guides-themeing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var HomePageComponent = (function () {
    function HomePageComponent() {
        document.title = "welcome to cloukit";
    }
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "\n  <div class=\"demo\">\n    <p>\n      Welcome to <strong>resuable components for Angular</strong>. \n      And when I say Angular I am talking about version 4 and higher.<br>\n    </p>\n    \n    <p>&nbsp;</p>\n    <h4>Goal and State of the Project</h4>\n    <p>We are currently in ALPHA state, meaning we <strong>don't accept contributions or issues</strong> at the moment.</p>\n    <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>\n    <p>\n      Primary goal is to provide common form components such as toggle, multi-select and more that\n      easily themeable via ngStyle.\n    </p>\n    \n    <p>&nbsp;</p>\n    <h4>Browser Support</h4>\n    <p>\n      We use 100% Angular with zero external dependencies. \n      So it should work with all <a href=\"https://angular.io/guide/browser-support\">supported browsers</a> \n      if you use the recommended polyfills.\n    </p>\n    <p>\n      I test all components thoroughly in the following operating systems and latest versions of the listed browsers.\n    </p>\n    <p>\n      <img src=\"/assets/images/supported-browsers.svg\" />\n    </p>\n    <p>&nbsp;</p>\n    <h4>Module Format and how we Build</h4>\n    <p>\n      All Components are written in TypeScript and come as NgModules that are \n      tree-shakeable and AOT enabled flat ES5 &amp; ES2015 Modules.\n    </p>\n    <p>To build our components we use <code>@angular/compiler-cli</code> aka <code>ngc</code> and <code>rollup</code>.</p>\n    <p>See \n      \u201C<app-link\n        href=\"https://www.youtube.com/watch?v=unICbsPGFIA\"\n        name=\"YouTube Packaging Angular - Jason Aden - ng-conf 2017\"\n        external=\"true\"\n      ></app-link>\u201D\n      and \n      <app-link\n        href=\"https://github.com/cloukit/library-build-chain\"\n        name=\"library-build-chain\"\n        external=\"true\"\n      ></app-link> for more details.\n    </p>\n    \n    <p>&nbsp;</p>\n    <h4>License</h4>\n    <p>\n      The sourcecode, component-graphics and documentation are licensed under the \n      <app-link\n        href=\"https://github.com/cloukit/legal\"\n        name=\"MIT License\"\n        external=\"true\"\n      ></app-link>.\n    </p>\n    <p>The cloukit logo is intellectual property of Bernhard Gr\u00FCnewaldt.</p>\n    <p>\n        <a href=\"http://www.flaticon.com/free-icon/glass_118409\">Glas Icon</a> made by \n        <a href=\"http://www.flaticon.com/authors/papedesign\" title=\"Papedesign\">Papedesign</a> from \n        <a href=\"http://www.flaticon.com\" title=\"Flaticon\">www.flaticon.com</a> is licensed by \n        <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n    </p>\n    <p>\n        <a href=\"http://www.flaticon.com/free-icon/frankenstein_253491\">Frankenstein Icon</a> made by \n        <a href=\"http://www.freepik.com\" title=\"Freepik\">Freepik</a> from\n        <a href=\"http://www.flaticon.com\" title=\"Flaticon\">www.flaticon.com</a> is licensed by \n        <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n    </p>\n    \n    \n    <p>&nbsp;</p>\n    <h4>Author</h4>\n    <p>\n      <app-link\n        href=\"https://codeclou.io\"\n        name=\"codeclou.io\"\n        external=\"true\"\n      ></app-link>\n      - \n      <app-link\n        href=\"https://github.com/clouless\"\n        name=\"Bernhard Gr\u00FCnewaldt\"\n        external=\"true\"\n      ></app-link>\n    </p>\n    \n    \n\n  </div>",
        styles: ['.demo { font-family:sans-serif'],
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
        document.title = "these are not the droids you are looking for!";
    }
    return NotFoundPageComponent;
}());
NotFoundPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: "\n  <div class=\"for0four\">\n    <h3>these are not the droids you are looking for!</h3>\n  </div>",
        styles: ['.for0four { font-family:sans-serif'],
    }),
    __metadata("design:paramtypes", [])
], NotFoundPageComponent);

//# sourceMappingURL=not-found-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/save-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=save-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/component-fetch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFetchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var ComponentFetchService = (function () {
    function ComponentFetchService(http) {
        this.http = http;
        this.baseUrl = 'https://cloukit.github.io/';
        this.sourceCodeBaseUrl = 'https://github.com/cloukit/';
        this.unpkgBaseUrl = 'https://unpkg.com/@cloukit/';
    }
    ComponentFetchService.prototype.getUnpkgComDistUrl = function (componentId, componentVersion) {
        return "" + this.unpkgBaseUrl + componentId + "@" + componentVersion + "/";
    };
    ComponentFetchService.prototype.getComponent = function (componentId) {
        return this.http
            .get("" + this.baseUrl + componentId + "/component.json")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.getPackageJson = function (componentId, componentVersion) {
        return this.http
            .get("" + this.unpkgBaseUrl + componentId + "@" + componentVersion + "/package.json")
            .map(this.extractData)
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.getPreviewSourceCode = function (componentId, componentVersion) {
        return this._fetchPreviewSourceFile(componentId, componentVersion, 'src/preview.component.ts');
    };
    ComponentFetchService.prototype.getPreviewTemplate = function (componentId, componentVersion) {
        return this._fetchPreviewSourceFile(componentId, componentVersion, 'src/preview.component.html');
    };
    ComponentFetchService.prototype.getModuleSourceCode = function (componentId, componentVersion) {
        return this._fetchPreviewSourceFile(componentId, componentVersion, 'src/app.module.ts');
    };
    ComponentFetchService.prototype.getUsageMarkdown = function (componentId, componentVersion) {
        return this.http
            .get("" + this.baseUrl + componentId + "/example/" + componentVersion + "/USAGE.md")
            .map(function (data) { return data.text(); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype._fetchPreviewSourceFile = function (componentId, componentVersion, previewFileName) {
        var _this = this;
        return this.http
            .get("" + this.baseUrl + componentId + "/example/" + componentVersion + "/" + previewFileName)
            .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_5__model_component_data_model__["a" /* ComponentPreviewFile */](previewFileName, "" + _this.sourceCodeBaseUrl + componentId + "/blob/gh-pages/example/" + componentVersion + "/" + previewFileName, data.text()); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ComponentFetchService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ComponentFetchService;
}());
ComponentFetchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ComponentFetchService);

var _a;
//# sourceMappingURL=component-fetch.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map