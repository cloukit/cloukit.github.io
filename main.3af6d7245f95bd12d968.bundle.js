webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"app\">\n    <div class=\"hidden-e2e-hook\" id=\"hidden-e2e-hook\">app-works</div>\n    <div class=\"app-nav\">\n      <a routerLink=\"/\" class=\"app-logo-link\">\n        <img src=\"/assets/images/cloukit-logo-square.svg\" class=\"app-logo-svg\" />\n      </a>\n      \n      <div class=\"app-component-list\">\n        <div class=\"app-nav-heading\">Guides</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/guide/themeing\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          Using Custom Themes\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/guide/iconing\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          Using Custom Icons\n        </a>\n        <div class=\"app-nav-heading\">Components</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/theme\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          theme\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/common\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          common\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/toggle\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          toggle\n        </a>\n      </div>\n\n      <div class=\"app-info\">\n        <p>\n          <app-link\n            href=\"https://codeclou.io/legal/impressum/\"\n            name=\"Imprint / Impressum\"\n            external=\"true\"\n          ></app-link>\n        </p>\n        <p>\n          <app-link\n            href=\"https://codeclou.io/legal/datenschutz/\"\n            name=\"Data Privacy / Datenschutzerkl\u00E4rung\"\n            external=\"true\"\n          ></app-link>\n        </p>\n        <p>\n          ___BUILDSTAMP___\n        </p>        \n        <!-- ___COMMIT___ -->\n      </div>\n    </div>\n    <div class=\"app-content\">\n      <router-outlet></router-outlet>\n    </div>\n    \n  </div>",
        styles: [
            'a { color: #710ECC; text-decoration:none;}',
            'a:hover { color: #9650D7; text-decoration:underline;}',
            '.app { font-family: \'Source Sans Pro\', sans-serif; display:flex; font-size:17px; }',
            '.app-logo-link { text-decoration:none; color:#74276D; font-size:30px; }',
            '.app-nav { width: 300px; padding:20px; }',
            '.app-nav-heading { text-transform: uppercase; color:#777; padding:5px; margin-top:30px; margin-bottom:10px; }',
            '.app-logo-svg { width:60%; margin: 0 auto; }',
            '.app-content { padding:30px; max-width:900px; }',
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
/* unused harmony export MyCloukitThemeService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_guides_iconing_page_component__ = __webpack_require__("../../../../../src/app/pages/guides-iconing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cloukit_toggle__ = __webpack_require__("../../../../@cloukit/toggle/toggle.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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























var appRoutes = [
    { path: 'guide/themeing', component: __WEBPACK_IMPORTED_MODULE_17_app_pages_guides_themeing_page_component__["a" /* GuidesThemeingPageComponent */] },
    { path: 'guide/iconing', component: __WEBPACK_IMPORTED_MODULE_20__pages_guides_iconing_page_component__["a" /* GuidesIconingPageComponent */] },
    { path: 'component/:componentId', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: 'component/:componentId/:componentVersion', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_page_component__["a" /* HomePageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_not_found_page_component__["a" /* NotFoundPageComponent */] }
];
var MyCloukitThemeService = (function (_super) {
    __extends(MyCloukitThemeService, _super);
    function MyCloukitThemeService() {
        return _super.call(this) || this;
    }
    return MyCloukitThemeService;
}(__WEBPACK_IMPORTED_MODULE_21__cloukit_theme__["c" /* CloukitThemeService */]));
MyCloukitThemeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MyCloukitThemeService);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_22__cloukit_toggle__["b" /* CloukitToggleModule */],
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
            __WEBPACK_IMPORTED_MODULE_20__pages_guides_iconing_page_component__["a" /* GuidesIconingPageComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_component_fetch_service__["a" /* ComponentFetchService */],
            { provide: __WEBPACK_IMPORTED_MODULE_21__cloukit_theme__["c" /* CloukitThemeService */], useClass: MyCloukitThemeService }
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
        this.componentVersionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ComponentDocumentationComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.selectedVersion = this.componentVersion;
        if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isNullOrUndefined"])(this.componentData)) {
            this.currentVersion = this.componentData.versions.filter(function (v) { return v.version === _this.selectedVersion; })[0];
        }
        this.iframeDocUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://cloukit.github.io/" + this.componentId + "/" + this.componentVersion + "/demo/");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentVersion", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["a" /* ComponentData */]) === "function" && _a || Object)
], ComponentDocumentationComponent.prototype, "componentData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */]) === "function" && _b || Object)
], ComponentDocumentationComponent.prototype, "componentPreviewTemplate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */]) === "function" && _c || Object)
], ComponentDocumentationComponent.prototype, "componentPreviewSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */]) === "function" && _d || Object)
], ComponentDocumentationComponent.prototype, "packageJson", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "componentDistUrl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentDocumentationComponent.prototype, "usageMarkdown", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ComponentDocumentationComponent.prototype, "componentVersionChange", void 0);
ComponentDocumentationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-documentation',
        template: "\n  <div class=\"component\" *ngIf=\"componentData?.versions\">\n    <div class=\"component-row component-row--no-border\">\n      <div class=\"component-header\">\n        <div class=\"component-headline\">\n          @cloukit/{{componentId}}\n          <select\n            [(ngModel)]=\"selectedVersion\"\n            (change)=\"changeComponentVersion()\"\n            class=\"selectbox\"\n          >\n            <option\n              *ngFor=\"let version of componentData.versions; index as i;\"\n              [value]=\"version.version\"\n            >\n              {{version.version}}\n            </option>\n          </select>\n        </div>\n        <div class=\"component-description\">\n          {{packageJson ? packageJson.description : ''}}\n        </div>\n      </div>\n    </div>\n    <div class=\"component-row component-row--no-border\">\n      <app-component-info-header\n        [componentName]=\"componentId\"\n        [componentVersion]=\"componentVersion\"\n        [componentStatus]=\"componentData.status\"\n        style=\"width:100%\"\n      >\n      </app-component-info-header>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        installation\n      </div>\n      <div class=\"component-col p-bt-0\">\n        <pre class=\"shell\">npm install --save @cloukit/{{componentId}}</pre><br>\n        <pre class=\"shell\">yarn add @cloukit/{{componentId}}</pre>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        example project<br>preview\n      </div>\n      <div class=\"component-col\">\n        <iframe\n          *ngIf=\"iframeDocUrl\"\n          [src]=\"iframeDocUrl\"\n          width=\"100%\"\n          height=\"400\"\n          class=\"preview-iframe\"\n        ></iframe>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        usage detail\n      </div>\n      <div class=\"component-col\">\n        <app-markdown-box\n          [markdown]=\"usageMarkdown\"\n        ></app-markdown-box>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let dependency of toPairs(packageJson.dependencies); index as i;\">\n            <td class=\"table-td\">{{dependency[0]}}</td>\n            <td class=\"table-td\">{{dependency[1]}}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        peer dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let peerDependency of toPairs(packageJson.peerDependencies); index as i;\">\n            <td class=\"table-td\">{{peerDependency[0]}}</td>\n            <td class=\"table-td\">{{peerDependency[1]}}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        example project<br>source\n      </div>\n      <div class=\"component-col\">\n        <app-preview-file-code-box\n          language=\"html\"\n          [previewFile]=\"componentPreviewTemplate\"\n        ></app-preview-file-code-box>\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentPreviewSource\"\n        ></app-preview-file-code-box>\n      </div>\n    </div>\n  </div>",
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
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], ComponentDocumentationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=component-documentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/component-info-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentInfoHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentVersion", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ComponentInfoHeaderComponent.prototype, "componentStatus", void 0);
ComponentInfoHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-info-header',
        template: "\n  <div class=\"info-header\">\n    <div class=\"info-header-buttons\">\n    \n      <span\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle(getStatusSwitchNameForComponentStatus(componentStatus))\"\n        (mouseover)=\"hoverStatus(componentStatus)\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getComponentStatusUri()\" class=\"vendor-logo\"></span>\n      <a\n        href=\"https://www.npmjs.com/package/@cloukit/{{componentName}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('npm')\"\n        (mouseover)=\"switchState.npm=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('npm')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://github.com/cloukit/{{componentName}}/tree/{{componentVersion}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('github')\"\n        (mouseover)=\"switchState.github=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('github')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://unpkg.com/@cloukit/{{componentName}}@{{componentVersion}}/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('unpkg')\"\n        (mouseover)=\"switchState.unpkg=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('unpkg')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://cloukit.github.io/{{componentName}}/{{componentVersion}}/documentation/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('compodoc')\"\n        (mouseover)=\"switchState.compodoc=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('compodoc')\" class=\"vendor-logo\"></a>\n    </div>\n    <div class=\"info-header-bar\" [ngStyle]=\"getInfoHeaderStyle()\">\n      <div class=\"info-header-bar-content\">\n        <div *ngIf=\"isSwitchStateOn()\">\n          {{switchState.statusExperimental ? 'API might change unexpectedly. Use at own risk. It is alive!' : ''}}\n          {{switchState.statusStable ? 'API should be stable.' : ''}}\n          {{switchState.npm ? 'Show package page on npmjs.com' : ''}}\n          {{switchState.github ? 'Show example project on github.com' : ''}}\n          {{switchState.unpkg ? 'Show dist contents on unpkg.com' : ''}}\n          {{switchState.compodoc ? 'Show detailed Component Documentation' : ''}}\n        </div>\n      </div>\n    </div>\n  </div>",
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
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
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.color)) {
            this.style.normal.color = this.color;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(this.colorHover)) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "href", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], LinkComponent.prototype, "external", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LinkComponent.prototype, "colorHover", void 0);
LinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownBoxComponent; });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], MarkdownBoxComponent.prototype, "markdown", void 0);
MarkdownBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewFileBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PreviewFileBoxComponent.prototype, "language", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */]) === "function" && _a || Object)
], PreviewFileBoxComponent.prototype, "previewFile", void 0);
PreviewFileBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-preview-file-code-box',
        template: "\n  <div class=\"code-box\" *ngIf=\"previewFile\">\n    <div class=\"code-header\">\n      <a *ngIf=\"previewFile.fileUrl\"\n        [href]=\"previewFile.fileUrl\"\n        target=\"_blank\"\n        class=\"code-link\"\n      >\n        {{previewFile.filename}}\n      </a>\n      <span class=\"code-link\" *ngIf=\"!previewFile.fileUrl\">{{previewFile.filename}}</span>\n    </div>\n    <div class=\"code-source\">\n      <app-source-code-box\n        [language]=\"language\"\n        [code]=\"previewFile.sourceCode\"\n      ></app-source-code-box>\n    </div>\n  </div>",
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismCssWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-prism-css-wrapper',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"prism-css-wrapper\">\n    <ng-content></ng-content>\n  </div>",
        styles: ["\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: 'Roboto Mono', monospace;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n    \n      -moz-tab-size: 4;\n      tab-size: 4;\n    \n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n    \n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: .5em 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n    \n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n    \n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: .1em;\n      border-radius: .3em;\n      white-space: normal;\n    }\n    \n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n    \n    .token.punctuation {\n      color: #f8f8f2;\n    }\n    \n    .namespace {\n      opacity: .7;\n    }\n    \n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #C076F3;\n    }\n    \n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n    \n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n    \n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n    \n    .token.atrule,\n    .token.attr-value,\n    .token.function {\n      color: #e6db74;\n    }\n    \n    .token.keyword {\n      color: #66d9ef;\n    }\n    \n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n    \n    .token.important,\n    .token.bold {\n      font-weight: 700;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n    \n    .token.entity {\n      cursor: help;\n    }\n  "],
    })
], PrismCssWrapperComponent);

//# sourceMappingURL=prism-css-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/source-code-box.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceCodeBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown__ = __webpack_require__("../../../../prismjs/components/prism-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_typescript__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SourceCodeBoxComponent.prototype, "language", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SourceCodeBoxComponent.prototype, "code", void 0);
SourceCodeBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentData; });
/* unused harmony export ComponentDataVersion */
/* unused harmony export Theme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentPreviewFile; });
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

/***/ "../../../../../src/app/model/guides-demo-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesDemoData; });
var GuidesDemoData = {
    poopChanSvg: "```html\n<svg width=\"512\" height=\"512\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M318.524 272.....464z\" fill=\"#5A2300\" fill-rule=\"evenodd\" />\n</svg>\n```",
    poopChanTs: "```typescript\nconst poopChanIcon = 'M318.524 272.....464z';\n```",
};
//# sourceMappingURL=guides-demo-data.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component-documentation-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentDocumentationPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__ = __webpack_require__("../../../../../src/app/services/component-fetch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semver__ = __webpack_require__("../../../../semver/semver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
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
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.paramComponentVersion) ||
            componentData.versions.filter(function (v) { return v.version === _this.paramComponentVersion; }).length === 0) {
            console.log('redirecting to highest version', highestVersion);
            this.router.navigate(['/component', this.paramComponentId, highestVersion]);
        }
        else {
            this.componentDistUrl = this.componentFetchService.getUnpkgComDistUrl(this.paramComponentId, this.paramComponentVersion);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-component-documentation-page',
        template: "\n  <div>\n    <app-component-documentation\n      [componentId]=\"paramComponentId\"\n      [componentVersion]=\"paramComponentVersion\"\n      [componentData]=\"componentData\"\n      [componentPreviewSource]=\"componentPreviewSource\"\n      [componentPreviewTemplate]=\"componentPreviewTemplate\"\n      [packageJson]=\"packageJson\"\n      [componentDistUrl]=\"componentDistUrl\"\n      [usageMarkdown]=\"usageMarkdown\"\n      (componentVersionChange)=\"handleComponentVersionChange($event)\"\n    ></app-component-documentation>\n    {{errorMessage}}\n  </div>",
        styles: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */]) === "function" && _c || Object])
], ComponentDocumentationPageComponent);

var _a, _b, _c;
//# sourceMappingURL=component-documentation-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/guides-iconing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesIconingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__ = __webpack_require__("../../../../../src/app/model/guides-demo-data.model.ts");
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


var GuidesIconingPageComponent = (function () {
    function GuidesIconingPageComponent() {
        this.guidesDemoData = __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__["a" /* GuidesDemoData */];
        document.title = "Using Custom Icons > guides > cloukit";
    }
    return GuidesIconingPageComponent;
}());
GuidesIconingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n  <div class=\"demo\">\n    <h2>Guide: Using Custom Icons</h2>\n    <p>\n      To explain how cloukit handles icons and how you can use your \n      own icons we will need the help of <strong>Poop-Chan</strong>.\n    </p>\n    <p style=\"text-align:center\">\n      <img src=\"/assets/images/demo/poop-chan.svg\" style=\"width:80px\"/>\n    </p>\n    <p>\n      Icons work with <strong>convention over configuration</strong>, meaning that\n      they consist of only one path with a viewbox of 512x512 pixels.\n    </p>\n    <p>\n      <app-markdown-box [markdown]=\"guidesDemoData.poopChanSvg\"></app-markdown-box>\n    </p>\n \n    <p>\n      When you use the wonderful <a href=\"https://www.sketchapp.com/\">Sketch</a> to draw your icons do it like this.\n      Create a <strong>Slice</strong> that is 512x512 pixels big and position it on <code>x=0</code> and <code>y=0</code>.\n      Then draw your icon in the middle of the slice and <strong>combine the shapes</strong> to only one.\n      Lastly export the slice as SVG.\n    </p>\n    <p style=\"text-align:center\">\n      <img src=\"/assets/images/demo/icon-sketch-howto.png\" style=\"width:90%\"/>\n    </p>\n    <p>\n      Since the outer SVG-Code of the icon will always be the same, we <strong>just need to save the path's d-attribute</strong>\n     into our TS-file like so.\n    </p>\n    <p>\n      <app-markdown-box [markdown]=\"guidesDemoData.poopChanTs\"></app-markdown-box>\n    </p>\n    <p>&nbsp;</p>\n    <p>\n      <strong>Tip:</strong>\n      Minify your SVG code with the <a href=\"https://jakearchibald.github.io/svgomg/\">awesome SVGOMG</a> tool. \n      That will shrink the size of the path code.\n    </p>\n    <p>&nbsp;</p>\n    <p>\n      <strong>Further Reading:</strong>\n      See the <a routerLink=\"/guide/themeing\">Themeing Guide</a> on how to use your custom icon inside a component theme.\n    </p>\n  </div>",
        styles: ['.demo { font-family:sans-serif'],
    }),
    __metadata("design:paramtypes", [])
], GuidesIconingPageComponent);

//# sourceMappingURL=guides-iconing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/guides-themeing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesThemeingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__ = __webpack_require__("../../../../../src/app/model/guides-demo-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_toggle__ = __webpack_require__("../../../../@cloukit/toggle/toggle.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function GuidesThemeingPageComponent(cloukitThemeService) {
        this.cloukitThemeService = cloukitThemeService;
        this.guidesDemoData = __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__["a" /* GuidesDemoData */];
        document.title = "Using Themes > guides > cloukit";
        this.cloukitThemeService.registerComponentTheme('poople', new PoopleTheme());
    }
    return GuidesThemeingPageComponent;
}());
GuidesThemeingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "\n  <div class=\"demo\">\n    <h2>Guide: Using Custom Themes</h2>\n    <p>\n      To explain themeing we will write a custom theme for the <a routerLink=\"/component/toggle\">@cloukit/toggle</a> component.\n      Therefore <strong>Poop-Chan</strong>\n      <img src=\"/assets/images/demo/poop-chan.svg\" style=\"width:25px;margin-bottom:-4px;\"/> will help us out.\n    </p>    \n    <p>\n      But first we need to understand how cloukit components are composed and how styling is applied.\n    </p>\n    <h3>Decomposing the toggle Component</h3>\n    <p>\n      At first I want to mention that all cloukit components <strong>know about their UI state</strong>.\n      What do I mean by that? If you in the \"traditional\" way of styling with CSS would give\n      an element an <code>el:hover</code> style your JS code would not know that a mouseover changes the styling.\n      Cloukit elements know about their UI state because it is handled with JS. \n      CSS is only applied directly for an element and <a href=\"https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes\">\n      pseudo-classes</a> are not used.      \n    </p>\n    <p>\n      Therefore cloukit uses the following wording:\n    </p>\n    <table>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>Component</strong></td>\n        <td>is a cloukit Angular Component like like toggle.</td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>Element</strong></td>\n        <td>is a DOM-element like <code>div</code>, <code>span</code> or <code>svg</code> inside the component.</td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>UI State</strong></td>\n        <td>\n          is the generic state your component is in regarding its UI. A toggle can be <em>toggled</em> or\n          <em>untoggled</em>. A textfield could be <em>focused</em> or <em>unfocused</em>. The UI State depends on the component type.\n        </td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>UI Modifier</strong></td>\n        <td>\n        is the generic modifier for the state your component is in regarding its UI. \n        While a toggle could be in its UI State <em>toggled</em> it still could be hovered with a mouse\n         and this would then for example be the UI modifier <em>hover</em>. Or if the form is disabled\n         the UI modifier would be <em>disabled</em>.\n        </td>\n      </tr>\n    </table>\n    <p>\n      A <strong>cloukit Theme</strong> holds styling information for all elements\n      of a component with all permutations of UI States and UI Modifiers. Below you see the example for\n      the toggle component.\n    </p>\n    <p style=\"text-align: center\">\n      <img src=\"/assets/images/guide/toggle-component-decomposed.svg\" width=\"80%\" />\n    </p>\n    <h3>Decomposing the toggle Default Theme</h3>\n    <p>\n      Ok first lets just use the default theme of the toggle component and adjust it a little.\n      With some tiny adjustments we can make a <strong>poople</strong> component.\n    </p>    \n    <p style=\"padding-left:100px\">\n      <cloukit-toggle theme=\"poople\"></cloukit-toggle>\n    </p>\n    <p>\n      TODO: Explain how createStyle and merge. Explain Icons.\n    </p>\n  </div>",
        styles: ['.demo { font-family:sans-serif'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _a || Object])
], GuidesThemeingPageComponent);

var PoopleTheme = (function (_super) {
    __extends(PoopleTheme, _super);
    function PoopleTheme() {
        var _this = _super.call(this) || this;
        var wrapperToggledBase = _this.getElementTheme('wrapper', 'toggled', 'base').styleDef;
        wrapperToggledBase.style.backgroundColor = '#710ECC';
        var iconLeftToggledBase = _this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;
        iconLeftToggledBase.icon.svgPathD = "M318.524 272.416c1.595-4.9 2.476-10.277\n  2.476-15.916 0-22.92-14.55-41.5-32.5-41.5S256\n  233.58 256 256.5s14.55 41.5 32.5 41.5c8.407 0\n  16.07-4.076 21.84-10.766-3.465 1.74-7.73 2.766-12.34\n  2.766-11.598 0-21-6.492-21-14.5s9.402-14.5 21-14.5c10.065\n  0 18.477 4.89 20.524 11.416zm-64.223-2.64c1.103-4.167\n  1.7-8.633 1.7-13.276 0-22.92-14.55-41.5-32.5-41.5S191\n  233.58 191 256.5s14.55 41.5 32.5 41.5c7.837 0 15.027-3.542\n  20.64-9.442-2.763.924-5.864 1.442-9.14 1.442-11.598\n  0-21-6.492-21-14.5s9.402-14.5 21-14.5c8.655 0 16.086 3.615\n  19.3 8.777zM215.665 167c-15.12-.673-26.165-5.653.482-35.798\n  34.866-39.445 76.588-78.396 95.968-60.897-41.262 40.023 12.62\n  74.417-7.06 96.695h6.402C339.37 167 362 189.624 362 217.547c0\n  15.958-7.398 30.19-18.948 39.453h31.605c27.913 0 50.54 22.624\n  50.54 50.547 0 21.782-13.78 40.347-33.093 47.453h39.204c27.916\n  0 50.546 22.624 50.546 50.547 0 27.916-22.64 50.547-50.546\n  50.547H80.545C52.63 456.094 30 433.47 30 405.547 30 377.63\n  52.64 355 80.545 355h39.544C100.775 347.895 87 329.333 87\n  307.547 87 279.63 109.633 257 137.54 257h31.402C157.394\n  247.737 150 233.508 150 217.547 150 189.63 172.637 167\n  200.544 167h15.12zM257 358.364c47.968 1.436 82.613-42.847\n  82.613-14.46 0 67.008-201.943 66.04-162.507 6.996 0-43.625\n  31.924 6.028 79.893 7.464z";
        iconLeftToggledBase.icon.svgStyle = {
            fill: '#fff',
            fillRule: 'evenodd',
        };
        return _this;
    }
    return PoopleTheme;
}(__WEBPACK_IMPORTED_MODULE_3__cloukit_toggle__["a" /* CloukitToggleComponentThemeCornered */]));
var _a;
//# sourceMappingURL=guides-themeing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=save-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/component-fetch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFetchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_component_data_model__ = __webpack_require__("../../../../../src/app/model/component-data.model.ts");
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






/* Keep in sync with: https://github.com/cloukit/library-build-chain/blob/master/demo-template/src/app/app.module.ts */
var injectAppModuleImports = function (inject) {
    return "\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { AppComponent } from './app.component';\nimport { DemoComponent } from '../demo/demo.component';\n\nconst ngDeclarations: any = [ AppComponent, DemoComponent ];\nconst ngImports: any = [ BrowserModule ];\nconst ngProviders: any = [ ];\nconst ngBootStrap: any = [ AppComponent ];\n\n" + inject + "\n\n@NgModule({\n  declarations: ngDeclarations,\n  imports: ngImports,\n  providers: ngProviders,\n  bootstrap: ngBootStrap\n})\nexport class AppModule { }\n";
};
var ComponentFetchService = (function () {
    function ComponentFetchService(http) {
        this.http = http;
        this.baseUrl = 'https://cloukit.github.io/';
        this.sourceCodeBaseUrl = 'https://github.com/cloukit/';
        this.rawFileBaseUrl = 'https://raw.githubusercontent.com/cloukit/';
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
        return this._fetchDemoFile(componentId, componentVersion, 'demo.component.ts');
    };
    ComponentFetchService.prototype.getPreviewTemplate = function (componentId, componentVersion) {
        return this._fetchDemoFile(componentId, componentVersion, 'demo.component.html');
    };
    ComponentFetchService.prototype.getUsageMarkdown = function (componentId, componentVersion) {
        return this.http
            .get("" + this.baseUrl + componentId + "/USAGE.md")
            .map(function (data) { return data.text(); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype._fetchDemoFile = function (componentId, componentVersion, demoFileName) {
        var _this = this;
        return this.http
            .get("" + this.rawFileBaseUrl + componentId + "/master/src/demo/" + demoFileName)
            .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_5__model_component_data_model__["b" /* ComponentPreviewFile */](demoFileName, "" + _this.sourceCodeBaseUrl + componentId + "/tree/" + componentVersion + "/src/demo/" + demoFileName, data.text()); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ComponentFetchService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);