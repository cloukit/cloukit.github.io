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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
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




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.preDestory = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.isHomePage = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .takeUntil(this.preDestory)
            .subscribe(function (routerEvent) {
            _this.isHomePage = routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] && routerEvent.url === '/';
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.preDestory.next(true);
        this.preDestory.complete();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
            template: "\n  <div class=\"app\">\n    <div class=\"hidden-e2e-hook\" id=\"hidden-e2e-hook\">app-works</div>\n    <div class=\"app-nav\" *ngIf=\"!isHomePage\">\n      <a routerLink=\"/\" class=\"app-logo-link\">\n        <img src=\"/assets/images/cloukit-logo-square.svg\" class=\"app-logo-svg\" />\n      </a>\n      <div class=\"app-component-list\">\n        <div class=\"app-nav-heading\">Guides</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/guide/themeing\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          Using Custom Themes\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/guide/iconing\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          Using Custom Icons\n        </a>\n        <div class=\"app-nav-heading\" routerLink=\"/component\">Components</div>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/theme\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          theme\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/common\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          common\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/toggle\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          toggle\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/pagination\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          pagination\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/dropout\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          dropout\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/tooltip\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          tooltip\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/icon\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          icon\n        </a>\n        <a\n          class=\"app-component-list-item\"\n          routerLink=\"/component/notification\"\n          routerLinkActive=\"app-component-list-item-active\"\n        >\n          notification\n        </a>\n      </div>\n      <div class=\"app-nav-heading\">Techdoc</div>\n      <a\n        class=\"app-component-list-item\"\n        routerLink=\"/techdoc/module-format-and-build\"\n        routerLinkActive=\"app-component-list-item-active\"\n      >\n        Module Format &amp; Build\n      </a>\n      <a\n        class=\"app-component-list-item\"\n        routerLink=\"/techdoc/license\"\n        routerLinkActive=\"app-component-list-item-active\"\n      >\n        License &amp; Author\n      </a>\n      <a\n        class=\"app-component-list-item\"\n        routerLink=\"/techdoc/project-state-contributing\"\n        routerLinkActive=\"app-component-list-item-active\"\n      >\n        Project State &amp; Contributing\n      </a>\n    </div>\n    <div class=\"{{isHomePage ? 'app-content-homepage' : 'app-content' }}\">\n      <router-outlet></router-outlet>\n      <div class=\"app-info\">\n        <app-link\n          href=\"https://codeclou.io/legal/impressum/\"\n          name=\"Imprint / Impressum\"\n          external=\"true\"\n        ></app-link>\n        &nbsp;-&nbsp;\n        <app-link\n          href=\"https://codeclou.io/legal/datenschutz/\"\n          name=\"Data Privacy / Datenschutzerkl\u00E4rung\"\n          external=\"true\"\n        ></app-link>\n        <!-- ___BUILDSTAMP___ -->\n        <!-- ___COMMIT___ -->\n      </div>\n    </div>\n  </div>",
            styles: [
                'a { color: #710ECC; text-decoration:none;}',
                'a:hover { color: #9650D7; text-decoration:underline;}',
                '.app { font-family: \'Source Sans Pro\', sans-serif; display:flex; font-size:17px; }',
                '.app-logo-link { text-decoration:none; color:#74276D; font-size:30px; }',
                '.app-nav { width: 250px; min-width: 250px; max-width: 250px; padding:20px; }',
                '.app-nav-heading { text-transform: uppercase; color:#777; padding:5px; margin-top:30px; margin-bottom:10px; }',
                '.app-logo-svg { width:60%; margin: 0 auto; }',
                '.app-content { padding:30px; max-width:1100px; }',
                '.app-content-homepage { width:100%; }',
                '.app-info { color:#777; font-size:12px; padding:8px; text-align:right;  margin-top:50px;}',
                '.app-component-list-item { text-decoration: none; color:#777; padding:10px; display:block; border-bottom:1px solid #ccc; }',
                '.app-component-list-item-active { color:#555; text-decoration:none; font-weight: bold; background-color:#efefef; }',
                '.app-component-list-item:hover { color:#555; text-decoration: none; }',
                '.app-component-list-item-active:hover { text-decoration:none; }',
                '.hidden-e2e-hook { display: none; }',
            ],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_techdoc_license_component__ = __webpack_require__("../../../../../src/app/pages/techdoc-license.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_techdoc_module_format_and_build_component__ = __webpack_require__("../../../../../src/app/pages/techdoc-module-format-and-build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_pages_techdoc_project_state_and_contributing_component__ = __webpack_require__("../../../../../src/app/pages/techdoc-project-state-and-contributing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_pages_component_overview_page_component__ = __webpack_require__("../../../../../src/app/pages/component-overview-page.component.ts");
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
    { path: 'component/:componentId/:componentVersion', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: 'component/:componentId', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_documentation_page_component__["a" /* ComponentDocumentationPageComponent */] },
    { path: 'component', component: __WEBPACK_IMPORTED_MODULE_26_app_pages_component_overview_page_component__["a" /* ComponentOverviewPageComponent */] },
    { path: 'techdoc/license', component: __WEBPACK_IMPORTED_MODULE_23__pages_techdoc_license_component__["a" /* TechdocLicenseComponent */] },
    { path: 'techdoc/module-format-and-build', component: __WEBPACK_IMPORTED_MODULE_24__pages_techdoc_module_format_and_build_component__["a" /* TechdocModuleFormatAndBuildComponent */] },
    { path: 'techdoc/project-state-contributing', component: __WEBPACK_IMPORTED_MODULE_25_app_pages_techdoc_project_state_and_contributing_component__["a" /* TechdocProjectStateAndContributingComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_page_component__["a" /* HomePageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_not_found_page_component__["a" /* NotFoundPageComponent */] },
];
var MyCloukitThemeService = /** @class */ (function (_super) {
    __extends(MyCloukitThemeService, _super);
    function MyCloukitThemeService() {
        return _super.call(this) || this;
    }
    MyCloukitThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MyCloukitThemeService);
    return MyCloukitThemeService;
}(__WEBPACK_IMPORTED_MODULE_21__cloukit_theme__["c" /* CloukitThemeService */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
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
                __WEBPACK_IMPORTED_MODULE_23__pages_techdoc_license_component__["a" /* TechdocLicenseComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_techdoc_module_format_and_build_component__["a" /* TechdocModuleFormatAndBuildComponent */],
                __WEBPACK_IMPORTED_MODULE_25_app_pages_techdoc_project_state_and_contributing_component__["a" /* TechdocProjectStateAndContributingComponent */],
                __WEBPACK_IMPORTED_MODULE_26_app_pages_component_overview_page_component__["a" /* ComponentOverviewPageComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_component_fetch_service__["a" /* ComponentFetchService */],
                { provide: __WEBPACK_IMPORTED_MODULE_21__cloukit_theme__["c" /* CloukitThemeService */], useClass: MyCloukitThemeService },
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedStyles; });
var SharedStyles = /** @class */ (function () {
    function SharedStyles() {
    }
    SharedStyles.styles = [
        '.code {}',
        'p, td { line-height:1.6rem; font-family: \'Source Sans Pro\', sans-serif; }',
        'h3 { color:#710ECC; font-weight:400; font-family: \'Source Sans Pro\', sans-serif; }',
        'h2 { color:#000; font-weight:400; font-family: \'Source Sans Pro\', sans-serif; font-size:30px; margin-top:10px; }',
        'code { padding:4px 2px 4px 2px; color:#7a2af3; }',
        'pre { border-radius:0 !important; }',
        'table { border-collapse: collapse; }',
        'table tbody tr td { border-bottom: 1px solid #e9ecef; padding:10px;  }',
        'table thead th { border-bottom: 1px solid #e9ecef; padding:10px; text-align:left; }',
    ];
    return SharedStyles;
}());

//# sourceMappingURL=app.styles.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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






var ComponentDocumentationComponent = /** @class */ (function () {
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
    ComponentDocumentationComponent.prototype.resizeIframe = function (event) {
        // const iframe = <HTMLIFrameElement> event.srcElement;
        // iframe.height = iframe.contentWindow.outerHeight + 30 + 'px';
    };
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
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */]) === "function" && _d || Object)
    ], ComponentDocumentationComponent.prototype, "componentPreviewModule", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["b" /* ComponentPreviewFile */]) === "function" && _e || Object)
    ], ComponentDocumentationComponent.prototype, "componentTheme", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_component_data_model__["c" /* PackageJson */]) === "function" && _f || Object)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ComponentDocumentationComponent.prototype, "themeMarkdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ComponentDocumentationComponent.prototype, "componentVersionChange", void 0);
    ComponentDocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-component-documentation',
            template: "\n  <div class=\"component\" *ngIf=\"componentData?.versions\">\n    <div class=\"component-row component-row--no-border\">\n      <div class=\"component-header\">\n        <div class=\"component-headline\">\n          <span style=\"flex:10;\">@cloukit/{{componentId}}</span>\n          <select\n            style=\"flex:1;\"\n            [(ngModel)]=\"selectedVersion\"\n            (change)=\"changeComponentVersion()\"\n            class=\"selectbox\"\n          >\n            <option\n              *ngFor=\"let version of componentData.versions; index as i;\"\n              [value]=\"version.version\"\n            >\n              {{version.version}}\n            </option>\n          </select>\n        </div>\n        <div class=\"component-description\">\n          {{packageJson ? packageJson.description : '...'}}\n        </div>\n      </div>\n    </div>\n    <div class=\"component-row component-row--no-border\" style=\"padding-right:28px;\">\n      <app-component-info-header\n        [componentName]=\"componentId\"\n        [componentVersion]=\"componentVersion\"\n        [componentStatus]=\"componentData.status\"\n      >\n      </app-component-info-header>\n    </div>\n    <div class=\"component-row\">\n      <!--\n      <div class=\"component-col component-col-heading\">\n        Installation\n      </div>\n      -->\n      <div class=\"component-col p-bt-0\">\n        <pre class=\"shell\">npm install --save @cloukit/{{componentId}}</pre><br>\n        <pre class=\"shell\">yarn add @cloukit/{{componentId}}</pre>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading component-col-heading-demo\">\n        <span style=\"flex:8;\">Demo</span>\n        <span style=\"flex:1;text-align:right; font-size:1.2rem;\">\n          <a\n            target=\"_blank\"\n            href=\"https://github.com/cloukit/{{componentId}}/tree/{{componentVersion}}/src/demo\"\n          >Source</a>\n        </span>\n      </div>\n      <div class=\"component-col\">\n        <iframe\n          *ngIf=\"iframeDocUrl\"\n          [src]=\"iframeDocUrl\"\n          width=\"100%\"\n          height=\"700\"\n          class=\"preview-iframe\"\n          (load)=\"resizeIframe($event)\"\n        ></iframe>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        Usage\n      </div>\n      <div class=\"component-col\">\n        <app-markdown-box\n          [markdown]=\"usageMarkdown\"\n        ></app-markdown-box>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        Dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let dependency of toPairs(packageJson.dependencies); index as i;\">\n            <td class=\"table-td\" style=\"width:250px;\">{{dependency[0]}}</td>\n            <td class=\"table-td\">{{dependency[1]}}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        Peer Dependencies\n      </div>\n      <div class=\"component-col\" *ngIf=\"packageJson\">\n        <table class=\"table\">\n          <tr *ngFor=\"let peerDependency of toPairs(packageJson.peerDependencies); index as i;\">\n            <td class=\"table-td\" style=\"width:250px;\">{{peerDependency[0]}}</td>\n            <td class=\"table-td\">{{peerDependency[1]}}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <!--\n    <div class=\"component-row\">\n      <div class=\"component-col component-col-heading\">\n        demo source\n      </div>\n      <div class=\"component-col\">\n        <app-preview-file-code-box\n          language=\"html\"\n          [previewFile]=\"componentPreviewTemplate\"\n        ></app-preview-file-code-box>\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentPreviewSource\"\n        ></app-preview-file-code-box>\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentPreviewModule\"\n        ></app-preview-file-code-box>\n      </div>\n    </div>\n    -->\n    <div class=\"component-row\" *ngIf=\"componentTheme\">\n      <div class=\"component-col component-col-heading\">\n        Theming\n      </div>\n      <div class=\"component-col\">\n        <app-markdown-box\n          [markdown]=\"themeMarkdown\"\n        ></app-markdown-box>\n        <p>The <strong>default Theme</strong> is composed like this.</p>\n        <app-preview-file-code-box\n          language=\"typescript\"\n          [previewFile]=\"componentTheme\"\n        ></app-preview-file-code-box>\n      </div>\n    </div>\n  </div>",
            styles: [
                '.component-row { display:flex; margin-bottom:10px; padding:10px; flex-direction: column; }',
                '.component-row--no-border { border-bottom:0px; }',
                '.component-col { margin-right:20px; min-width:900px; }',
                '.component-col-heading { font-size:1.6rem; font-weight:300; min-height:35px; max-height:35px; margin-bottom:10px; color: #710ECC; border-bottom: 1px solid #710ECC; }',
                '.component-col-heading-demo { display:flex; }',
                '.component-header { display:block; }',
                '.component-headline { display:flex; font-size:30px; margin-bottom:8px; padding-right:23px;}',
                '.component-description { font-size:20px; margin-bottom:20px; }',
                '.selectbox { border-radius:0px; border: 1px solid #ccc; font-size:14px; }',
                '.p-bt-0 { padding-top:0px; padding-bottom:0px }',
                '.shell { padding:10px 15px 10px 15px; margin:0px; margin-top:-5px; color:#fff; background-color: #272822; }',
                '.preview-iframe { border:0; border-bottom:1px solid #efefef; }',
                '.table { font-family:monospace; }',
                '.table-td { padding:3px; }',
            ].concat(__WEBPACK_IMPORTED_MODULE_5__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _g || Object])
    ], ComponentDocumentationComponent);
    return ComponentDocumentationComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

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


var ComponentInfoHeaderComponent = /** @class */ (function () {
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
            template: "\n  <div class=\"info-header\">\n    <div class=\"info-header-buttons\">\n      <span\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle(getStatusSwitchNameForComponentStatus(componentStatus))\"\n        (mouseover)=\"hoverStatus(componentStatus)\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getComponentStatusUri()\" class=\"vendor-logo\"></span>\n      <a\n        href=\"https://www.npmjs.com/package/@cloukit/{{componentName}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('npm')\"\n        (mouseover)=\"switchState.npm=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('npm')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://github.com/cloukit/{{componentName}}/tree/{{componentVersion}}\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('github')\"\n        (mouseover)=\"switchState.github=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('github')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://unpkg.com/@cloukit/{{componentName}}@{{componentVersion}}/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('unpkg')\"\n        (mouseover)=\"switchState.unpkg=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('unpkg')\" class=\"vendor-logo\"></a>\n      <a\n        href=\"https://cloukit.github.io/{{componentName}}/{{componentVersion}}/documentation/\"\n        target=\"_blank\"\n        class=\"vendor-logo-link\"\n        [ngStyle]=\"getButtonStyle('compodoc')\"\n        (mouseover)=\"switchState.compodoc=true\"\n        (mouseleave)=\"resetSwitchState()\"\n      ><img [src]=\"getVendorLogo('compodoc')\" class=\"vendor-logo\"></a>\n    </div>\n    <div class=\"info-header-bar\" [ngStyle]=\"getInfoHeaderStyle()\">\n      <div class=\"info-header-bar-content\">\n        <div *ngIf=\"isSwitchStateOn()\">\n          {{switchState.statusExperimental ? 'API might change unexpectedly. Use at own risk. It is alive!' : ''}}\n          {{switchState.statusStable ? 'API should be stable.' : ''}}\n          {{switchState.npm ? 'Show package page on npmjs.com' : ''}}\n          {{switchState.github ? 'Show example project on github.com' : ''}}\n          {{switchState.unpkg ? 'Show dist contents on unpkg.com' : ''}}\n          {{switchState.compodoc ? 'Show detailed Component Documentation' : ''}}\n        </div>\n      </div>\n    </div>\n  </div>",
            styles: [
                '.vendor-logo { width:120px; }',
                '.info-header-bar { height:40px; width:100%; }',
                '.info-header-bar-content { width:100%; padding: 10px; text-align:center; }',
                '.info-header-buttons { display: flex; justify-content: space-between; }',
                '.vendor-logo-link { display:flex; width: 120px; min-width:120px; max-width: 120px; padding:0; height:65px; }',
            ],
        })
    ], ComponentInfoHeaderComponent);
    return ComponentInfoHeaderComponent;
}());

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


var LinkComponent = /** @class */ (function () {
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
    return LinkComponent;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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
        },
    };
};
var svgsAsObjectShowDownExtension = function () {
    return {
        type: 'lang',
        regex: /cloukitSvg:([-.:_/a-zA-Z0-9]+)/g,
        replace: '<object data="$1" type="image/svg+xml"></object>',
    };
};
var MarkdownBoxComponent = /** @class */ (function () {
    function MarkdownBoxComponent() {
        __WEBPACK_IMPORTED_MODULE_1_showdown__["extension"]('showdown-prism', showdownPrism);
        __WEBPACK_IMPORTED_MODULE_1_showdown__["extension"]('showdown-svg-object', svgsAsObjectShowDownExtension);
        this.converter = new __WEBPACK_IMPORTED_MODULE_1_showdown__["Converter"]({ extensions: ['showdown-prism', 'showdown-svg-object'] });
        this.converter.setFlavor('github');
    }
    MarkdownBoxComponent.prototype.ngOnChanges = function () {
        this.markdownHtml = this.converter.makeHtml(this.markdown);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MarkdownBoxComponent.prototype, "markdown", void 0);
    MarkdownBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-markdown-box',
            template: "\n  <app-prism-css-wrapper>\n    <div\n      class=\"markdown-box\"\n      [innerHtml]=\"markdownHtml | safeHtml\"\n    ></div>\n  </app-prism-css-wrapper>",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
            styles: [
                '.markdown-box {   }',
                '.markdown-box pre { background-color:#333; padding:5px 10px 5px 10px; }',
            ].concat(__WEBPACK_IMPORTED_MODULE_6_app_app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], MarkdownBoxComponent);
    return MarkdownBoxComponent;
}());

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


var PreviewFileBoxComponent = /** @class */ (function () {
    function PreviewFileBoxComponent() {
    }
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
    return PreviewFileBoxComponent;
    var _a;
}());

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
var PrismCssWrapperComponent = /** @class */ (function () {
    function PrismCssWrapperComponent() {
    }
    PrismCssWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-prism-css-wrapper',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
            template: "\n  <div class=\"prism-css-wrapper\">\n    <ng-content></ng-content>\n  </div>",
            styles: ["\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: 'Roboto Mono', monospace;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n    \n      -moz-tab-size: 4;\n      tab-size: 4;\n    \n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n    \n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: .5em 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n    \n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n    \n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: .1em;\n      border-radius: .3em;\n      white-space: normal;\n    }\n    \n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n    \n    .token.punctuation {\n      color: #f8f8f2;\n    }\n    \n    .namespace {\n      opacity: .7;\n    }\n    \n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #C076F3;\n    }\n    \n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n    \n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n    \n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n    \n    .token.atrule,\n    .token.attr-value,\n    .token.function {\n      color: #e6db74;\n    }\n    \n    .token.keyword {\n      color: #66d9ef;\n    }\n    \n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n    \n    .token.important,\n    .token.bold {\n      font-weight: 700;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n    \n    .token.entity {\n      cursor: help;\n    }\n  "],
        })
    ], PrismCssWrapperComponent);
    return PrismCssWrapperComponent;
}());

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





var SourceCodeBoxComponent = /** @class */ (function () {
    function SourceCodeBoxComponent() {
    }
    SourceCodeBoxComponent.prototype.ngOnChanges = function () {
        this.codePreview = __WEBPACK_IMPORTED_MODULE_1_prismjs__["highlight"](this.code, __WEBPACK_IMPORTED_MODULE_1_prismjs__["languages"][this.language]);
    };
    SourceCodeBoxComponent.prototype.getLanguage = function () {
        return "language-" + this.language;
    };
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
    return SourceCodeBoxComponent;
}());

//# sourceMappingURL=source-code-box.js.map

/***/ }),

/***/ "../../../../../src/app/model/component-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentData; });
/* unused harmony export ComponentDataVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentPreviewFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PackageJson; });
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
var ComponentData = /** @class */ (function () {
    function ComponentData() {
    }
    return ComponentData;
}());

var ComponentDataVersion = /** @class */ (function () {
    function ComponentDataVersion() {
    }
    return ComponentDataVersion;
}());

var ComponentPreviewFile = /** @class */ (function () {
    function ComponentPreviewFile(filename, fileUrl, sourceCode) {
        this.filename = filename;
        this.fileUrl = fileUrl;
        this.sourceCode = sourceCode;
    }
    return ComponentPreviewFile;
}());

var PackageJson = /** @class */ (function () {
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
    smileyChanSvg: "```html\n<svg width=\"512\" height=\"512\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M256 474c-120.398.....664z\" fill=\"#5A2300\" fill-rule=\"evenodd\" />\n</svg>\n```",
    smileyChanTs: "```typescript\nconst smileyChanIcon = 'M256 474c-120.398.....664z';\n```",
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





var ComponentDocumentationPageComponent = /** @class */ (function () {
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
            var currentVersion = this.componentData.versions.filter(function (v) { return v.version === _this.paramComponentVersion; })[0];
            this.componentTheme = null;
            if (currentVersion.hasTheme) {
                this.componentFetchService
                    .getTheme(this.paramComponentId, this.paramComponentVersion)
                    .subscribe(function (data) { return _this.componentTheme = data; }, function (error) { return _this.errorMessage = error; });
                this.componentFetchService
                    .getThemeMarkdown(this.paramComponentId, this.paramComponentVersion)
                    .subscribe(function (markdown) { return _this.themeMarkdown = markdown; }, function (error) { return _this.errorMessage = error; });
            }
            this.componentFetchService
                .getPreviewModule(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (data) { return _this.componentPreviewModule = data; }, function (error) { return _this.errorMessage = error; });
            this.componentFetchService
                .getPreviewSourceCode(this.paramComponentId, this.paramComponentVersion)
                .subscribe(function (data) { return _this.componentPreviewSource = data; }, function (error) { return _this.errorMessage = error; });
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
    ComponentDocumentationPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-component-documentation-page',
            template: "\n  <div>\n    <app-component-documentation\n      [componentId]=\"paramComponentId\"\n      [componentVersion]=\"paramComponentVersion\"\n      [componentData]=\"componentData\"\n      [componentPreviewSource]=\"componentPreviewSource\"\n      [componentPreviewTemplate]=\"componentPreviewTemplate\"\n      [componentPreviewModule]=\"componentPreviewModule\"\n      [componentTheme]=\"componentTheme\"\n      [themeMarkdown]=\"themeMarkdown\"\n      [packageJson]=\"packageJson\"\n      [componentDistUrl]=\"componentDistUrl\"\n      [usageMarkdown]=\"usageMarkdown\"\n      (componentVersionChange)=\"handleComponentVersionChange($event)\"\n    ></app-component-documentation>\n    {{errorMessage}}\n  </div>",
            styles: [],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_component_fetch_service__["a" /* ComponentFetchService */]) === "function" && _c || Object])
    ], ComponentDocumentationPageComponent);
    return ComponentDocumentationPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=component-documentation-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/component-overview-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOverviewPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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


var ComponentOverviewPageComponent = /** @class */ (function () {
    function ComponentOverviewPageComponent() {
        document.title = "component overview > cloukit";
    }
    ComponentOverviewPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <div>\n    <h2>Component Overview</h2>\n    <table>\n      <tbody>\n        <tr>\n          <td><a routerLink=\"/component/theme\">theme</a></td>\n          <td>\n            Basic classes and services for themeing components.\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/common\">common</a></td>\n          <td>\n            Common directives that are used by higher level components such as hasFocus and similar.\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/toggle\">toggle</a></td>\n          <td>\n            A toggle component that can be used in an Angular Reactive Form for a boolean.\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/pagination\">pagination</a></td>\n          <td>\n            A pagination component that can be used to paginate huge lists of things.\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/dropout\">dropout</a></td>\n          <td>\n            Dropout is a non visible helper to drop something down, up, left or right relative to a trigger element\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/tooltip\">tooltip</a></td>\n          <td>\n            A simple tooltip component\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/icon\">icon</a></td>\n          <td>\n            A simple icon component\n          </td>\n        </tr>\n        <tr>\n          <td><a routerLink=\"/component/notification\">notification</a></td>\n          <td>\n            Show success, error, info and warn notifications on the page\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], ComponentOverviewPageComponent);
    return ComponentOverviewPageComponent;
}());

//# sourceMappingURL=component-overview-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/guides-iconing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesIconingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__ = __webpack_require__("../../../../../src/app/model/guides-demo-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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



var GuidesIconingPageComponent = /** @class */ (function () {
    function GuidesIconingPageComponent() {
        this.guidesDemoData = __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__["a" /* GuidesDemoData */];
        document.title = "Using Custom Icons > guides > cloukit";
    }
    GuidesIconingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <div class=\"demo\">\n    <h2>Guide to Using Custom Icons</h2>\n    <p>\n      To explain how cloukit handles icons and how you can use your\n      own icons we will need the help of <strong>Smiley-Chan</strong>.\n    </p>\n    <p style=\"text-align:center\">\n      <img src=\"/assets/images/icon-guide/smiley-chan.svg\" style=\"width:80px\"/>\n    </p>\n    <p>\n      Icons work with <strong>convention over configuration</strong>, meaning that\n      they consist of only one path with a viewbox of 512x512 pixels.\n    </p>\n    <p>\n      <app-markdown-box [markdown]=\"guidesDemoData.smileyChanSvg\"></app-markdown-box>\n    </p>\n\n    <p>\n      When you use the wonderful <a href=\"https://www.sketchapp.com/\">Sketch</a> to draw your icons do it like this.\n      Create a <strong>Slice</strong> that is 512x512 pixels big and position it on <code>x=0</code> and <code>y=0</code>.\n      Then draw your icon in the middle of the slice and <strong>combine the shapes</strong> to only one.\n      Lastly export the slice as SVG.\n    </p>\n    <p style=\"text-align:center\">\n      <a href=\"/assets/images/icon-guide/icon-sketch-howto.png\" target=\"_blank\">\n        <img\n          src=\"/assets/images/icon-guide/icon-sketch-howto.png\"\n          style=\"width:80%\"\n          data-bilderrahmen=\"gallery-01\"\n          data-bilderrahmen-title=\"Icon Sketch Howto\"\n        />\n      </a>\n    </p>\n    <p>\n      Since the outer SVG-Code of the icon will always be the same, we <strong>just need to save the path's d-attribute</strong>\n     into our TS-file like so.\n    </p>\n    <p>\n      <app-markdown-box [markdown]=\"guidesDemoData.smileyChanTs\"></app-markdown-box>\n    </p>\n    <p>&nbsp;</p>\n    <p>\n      <strong>Tip:</strong>\n      Minify your SVG code with the <a href=\"https://jakearchibald.github.io/svgomg/\">awesome SVGOMG</a> tool.\n      That will shrink the size of the path code.\n    </p>\n    <p>&nbsp;</p>\n    <p>\n      <strong>Further Reading:</strong>\n      See the <a routerLink=\"/guide/themeing\">Themeing Guide</a> on how to use your custom icon inside a component theme.\n    </p>\n  </div>",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_2__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], GuidesIconingPageComponent);
    return GuidesIconingPageComponent;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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





var GuidesThemeingPageComponent = /** @class */ (function () {
    function GuidesThemeingPageComponent(cloukitThemeService) {
        this.cloukitThemeService = cloukitThemeService;
        this.guidesDemoData = __WEBPACK_IMPORTED_MODULE_1__model_guides_demo_data_model__["a" /* GuidesDemoData */];
        this.dummyComponents = "import { Component } from '@angular/core';\nimport { CloukitThemeService } from '@cloukit/theme';\nimport { CloukitToggleComponentThemeCornered } from '@cloukit/toggle';\n\n@Component({\n  selector: 'dummy',\n  template: '<cloukit-toggle theme=\"smiggle\"></cloukit-toggle>',\n  styles: []\n})\nexport class DummyComponent {\n  constructor(private cloukitThemeService: CloukitThemeService) {\n    document.title = `Using Themes > guides > cloukit`;\n    this.cloukitThemeService.registerComponentTheme('smiggle', new SmiggleTheme());\n  }\n}\n\nexport class SmiggleTheme extends CloukitToggleComponentThemeCornered {\n  constructor() {\n    super();\n    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base').styleDef;\n    wrapperToggledBase.style.backgroundColor = '#710ECC';\n\n    const iconLeftToggledBase = this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;\n    iconLeftToggledBase.icon.svgPathD = `M256 474c-120.398 0-218-97.602-218-218S135.602\n      38 256 38s218 97.602 218 218-97.602 218-218 218zm-83-242c20.435 0\n      37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37 16.565 37 37\n      37zm163 0c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37\n      16.565 37 37 37zm-197 73v41c39 34.91 78 52.367 117 52.367S334 380.91\n      373 346v-41c-39.24 24.443-78.24 36.664-117 36.664-38.76 0-77.76-12.22-117-36.664z`;\n    iconLeftToggledBase.icon.svgStyle = {\n      fill: '#fff',\n      fillRule: 'evenodd',\n    };\n  }\n}\n";
        document.title = "Using Themes > guides > cloukit";
        this.cloukitThemeService.registerComponentTheme('smiggle', new SmiggleTheme());
    }
    GuidesThemeingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <div class=\"demo\">\n    <h2>Guide to Using Custom Themes</h2>\n    <p>\n      To explain themeing we will write a custom theme for the\n      <a routerLink=\"/component/toggle\">@cloukit/toggle</a> component.\n      Therefore <strong>Smiley-Chan</strong>\n      <img src=\"/assets/images/icon-guide/smiley-chan.svg\" style=\"width:25px;margin-bottom:-4px;\"/> will help us out.\n      But first we need to understand how cloukit components are composed and how styling is applied.\n    </p>\n    <h3>Decomposing the toggle Component</h3>\n    <p>\n      At first I want to mention that all cloukit components <strong>know about their UI state</strong>.\n      What do I mean by that? If you in the \"traditional\" way of styling with CSS would give\n      an element an <code>el:hover</code> style your JS code would not know that a mouseover changes the styling.\n      Cloukit elements know about their UI state because it is handled with JS.\n      CSS is only applied directly for an element and\n      <a href=\"https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes\">\n      pseudo-classes</a> are not used.\n    </p>\n    <p>\n      Therefore cloukit uses the following wording:\n    </p>\n    <table>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>Component</strong></td>\n        <td>is a cloukit Angular Component like <code>tooltip</code>.</td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>Element</strong></td>\n        <td>is a DOM-element like <code>div</code>, <code>span</code> or <code>svg</code> inside the component.</td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>UI State</strong></td>\n        <td>\n          is the generic state your component is in regarding its UI. A toggle can be <em>toggled</em> or\n          <em>untoggled</em>. A textfield could be <em>focused</em> or <em>unfocused</em>.\n          The UI State depends on the component type.\n          In a complex Component different elements can have independent UI States.\n        </td>\n      </tr>\n      <tr>\n        <td style=\"vertical-align:top\"><strong>UI Modifier</strong></td>\n        <td>\n        is the generic modifier for the state your component is in regarding its UI.\n        While a toggle could be in its UI State <em>toggled</em> it still could be hovered with a mouse\n         and this would then for example be the UI modifier <em>hover</em>. Or if the form is disabled\n         the UI modifier would be <em>disabled</em>.\n        </td>\n      </tr>\n    </table>\n    <p>\n      A <strong>cloukit Theme</strong> holds styling information for all elements\n      of a component with all permutations of UI States and UI Modifiers. Below you see the example for\n      the toggle component.\n    </p>\n    <p style=\"text-align: center\">\n      <object style=\"width:80%\" type=\"image/svg+xml\"\n              data=\"https://cloukit.github.io/toggle/themeing/cloukit-toggle-decomposed.svg\"></object>\n      <object style=\"width:80%\" type=\"image/svg+xml\"\n              data=\"https://cloukit.github.io/toggle/themeing/cloukit-toggle-states-and-modifiers.svg\"></object>\n    </p>\n    <h3>Extending the toggle Default Theme</h3>\n    <p>\n      Ok first lets just use the default theme of the toggle component and adjust it a little.\n      With some tiny adjustments we can make a <strong>smiggle</strong> component with the smiley as the leftIcon.\n      (Just click the toggle to see it).\n    </p>\n    <p style=\"padding-left:100px\">\n      <cloukit-toggle theme=\"smiggle\"></cloukit-toggle>\n    </p>\n    <p>\n      What we are doing is basically extending the <code>CloukitToggleComponentThemeCornered</code> theme\n      and setting the SVG Path for the <code>iconLeft</code>.\n      In the constructor of our Component (usually you would do this in your NgModule Component) we\n      register our <code>SmiggleTheme</code> at the <code>CloukitThemeService</code> as <em>smiggle</em>.\n      In our template we can now use the <code>cloukit-toggle</code> with <code>theme=\"smiggle\"</code>.\n    </p>\n    <app-source-code-box\n      language=\"typescript\"\n      [code]=\"dummyComponents\"\n    ></app-source-code-box>\n    <p>\n      This seems a little strange at first, but you will get used to it, once you recognize, that\n      you can theme any component with your own theme throughout your whole application.\n    </p>\n  </div>",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_4__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _a || Object])
    ], GuidesThemeingPageComponent);
    return GuidesThemeingPageComponent;
    var _a;
}());

var SmiggleTheme = /** @class */ (function (_super) {
    __extends(SmiggleTheme, _super);
    function SmiggleTheme() {
        var _this = _super.call(this) || this;
        var wrapperToggledBase = _this.getElementTheme('wrapper', 'toggled', 'base').styleDef;
        wrapperToggledBase.style.backgroundColor = '#710ECC';
        var iconLeftToggledBase = _this.getElementTheme('iconLeft', 'toggled', 'base').styleDef;
        iconLeftToggledBase.icon.svgPathD = "M256 474c-120.398 0-218-97.602-218-218S135.602\n    38 256 38s218 97.602 218 218-97.602 218-218 218zm-83-242c20.435 0\n    37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37 16.565 37 37\n    37zm163 0c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.565-37 37\n    16.565 37 37 37zm-197 73v41c39 34.91 78 52.367 117 52.367S334 380.91\n    373 346v-41c-39.24 24.443-78.24 36.664-117 36.664-38.76 0-77.76-12.22-117-36.664z";
        iconLeftToggledBase.icon.svgStyle = {
            fill: '#fff',
            fillRule: 'evenodd',
        };
        return _this;
    }
    return SmiggleTheme;
}(__WEBPACK_IMPORTED_MODULE_3__cloukit_toggle__["a" /* CloukitToggleComponentThemeCornered */]));
//# sourceMappingURL=guides-themeing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        document.title = "welcome to cloukit";
    }
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <div class=\"teaserRow\">\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-logo\">\n        <img src=\"/assets/images/cloukit-logo-square.svg\" class=\"logo\" />\n      </div>\n    </div>\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-seven isLink\" routerLink=\"/component\">\n        Components\n      </div>\n   </div>\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-five isLink\" routerLink=\"/guide/iconing\">\n        Icons\n      </div>\n    </div>\n  </div>\n  <div class=\"teaserRow\">\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-two isLink\" routerLink=\"/guide/themeing\">\n        Themeing\n      </div>\n    </div>\n    <div class=\"teaserCol2\">\n      <div class=\"teaserBox teaserBox-three teaserText\">\n        Reusable Components for Angular 4+<br>\n          100% Angular<br>\n          100% Typescript<br>\n          100% ngStyle CSS in JS<br>\n          100% Themeable\n      </div>\n    </div>\n  </div>\n  <div class=\"teaserRow\">\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-four isLink\" routerLink=\"/techdoc/project-state-contributing\">\n        Project State & Contributing\n      </div>\n    </div>\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-one isLink\" routerLink=\"/techdoc/module-format-and-build\">\n        Module Format and Build\n      </div>\n    </div>\n    <div class=\"teaserCol1\">\n      <div class=\"teaserBox teaserBox-six isLink\" routerLink=\"/techdoc/license\">\n        License and Author\n      </div>\n    </div>\n  </div>\n  ",
            styles: [
                '.teaserRow { display:flex; margin: 0 auto; max-width:1200px; flex-wrap: wrap; min-height:320px; }',
                '.teaserCol1 { flex: 1; }',
                '.teaserCol2 { flex: 2;}',
                '.teaserBox { padding:20px; min-width: 300px; height:100%; min-height:280px; }',
                '.teaserBox-logo { background-color:#efefef; color: #fff; text-align:center; }',
                '.teaserBox-logo:hover { background-color:#fff;}',
                '.logo { width:300px; }',
                '.teaserBox-one { background-color:#D600A1; color: #fff; }',
                '.teaserBox-one:hover { background-color:#C50094; color: #fff; }',
                '.teaserBox-two { background-color:#BAF700; color: #fff; }',
                '.teaserBox-two:hover { background-color:#9DCE08; color: #fff; }',
                '.teaserBox-three { background-color:#FFF200; color: #333; }',
                '.teaserBox-three:hover { background-color:#F4E700; color: #333; }',
                '.teaserBox-four { background-color:#710ECC; color: #fff; }',
                '.teaserBox-four:hover { background-color:#650DB6; color: #fff; }',
                '.teaserBox-five { background-color:#513FD3; color: #fff; }',
                '.teaserBox-five:hover { background-color:#3927B6; color: #fff; }',
                '.teaserBox-six { background-color:#03ABC2; color: #fff; }',
                '.teaserBox-six:hover { background-color:#0394A8; color: #fff; }',
                '.teaserBox-seven { background-color:#FF9431; color: #fff; }',
                '.teaserBox-seven:hover { background-color:#E37F23; color: #fff; }',
                '.teaserText { font-size:1.8rem; font-family: \'Source Sans Pro\', sans-serif; font-weight: 300; line-height:2.8rem; }',
                '.isLink { cursor:pointer; }',
            ].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());

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

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
        document.title = "these are not the droids you are looking for!";
    }
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <div class=\"for0four\">\n    <h3>these are not the droids you are looking for!</h3>\n  </div>",
            styles: ['.for0four { font-family:sans-serif; }'],
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());

//# sourceMappingURL=not-found-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/techdoc-license.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechdocLicenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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


var TechdocLicenseComponent = /** @class */ (function () {
    function TechdocLicenseComponent() {
        document.title = "License > techdoc > cloukit";
    }
    TechdocLicenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <h2>License &amp; Author</h2>\n  <p>&nbsp;</p>\n  <h4>License</h4>\n  <p>\n    The sourcecode, component-graphics and documentation are licensed under the\n    <app-link\n      href=\"https://github.com/cloukit/legal\"\n      name=\"MIT License\"\n      external=\"true\"\n    ></app-link>.\n  </p>\n  <p>The cloukit logo is intellectual property of Bernhard Gr\u00FCnewaldt.</p>\n\n  <p>&nbsp;</p>\n  <h4>Author</h4>\n  <p>\n    <app-link\n      href=\"https://codeclou.io\"\n      name=\"codeclou.io\"\n      external=\"true\"\n    ></app-link>\n    -\n    <app-link\n      href=\"https://github.com/clouless\"\n      name=\"Bernhard Gr\u00FCnewaldt\"\n      external=\"true\"\n    ></app-link>\n  </p>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], TechdocLicenseComponent);
    return TechdocLicenseComponent;
}());

//# sourceMappingURL=techdoc-license.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/techdoc-module-format-and-build.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechdocModuleFormatAndBuildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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


var TechdocModuleFormatAndBuildComponent = /** @class */ (function () {
    function TechdocModuleFormatAndBuildComponent() {
        document.title = "Module Format &amp; Build > techdoc > cloukit";
    }
    TechdocModuleFormatAndBuildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <h2>Module Format &amp; Build</h2>\n  <p>&nbsp;</p>\n\n  <p>&nbsp;</p>\n  <h4>Browser Support</h4>\n  <p>\n    We use 100% Angular with zero external dependencies.\n    So it should work with all <a href=\"https://angular.io/guide/browser-support\">supported browsers</a>\n    if you use the recommended polyfills.\n  </p>\n  <p>\n    I test all components thoroughly in the following operating systems and latest versions of the listed browsers.\n  </p>\n  <p>\n    <img src=\"/assets/images/supported-browsers.svg\" />\n  </p>\n  <p>&nbsp;</p>\n  <h4>Module Format and how we Build</h4>\n  <p>\n    All Components are written in TypeScript and come as NgModules that are\n    tree-shakeable and AOT enabled flat ES5 &amp; ES2015 Modules.\n  </p>\n  <p>To build our components we use <code>@angular/compiler-cli</code> aka <code>ngc</code> and <code>rollup</code>.</p>\n  <p>See\n    \u201C<app-link\n      href=\"https://www.youtube.com/watch?v=unICbsPGFIA\"\n      name=\"YouTube Packaging Angular - Jason Aden - ng-conf 2017\"\n      external=\"true\"\n    ></app-link>\u201D\n    and\n    <app-link\n      href=\"https://github.com/cloukit/library-build-chain\"\n      name=\"library-build-chain\"\n      external=\"true\"\n    ></app-link> for more details.\n  </p>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], TechdocModuleFormatAndBuildComponent);
    return TechdocModuleFormatAndBuildComponent;
}());

//# sourceMappingURL=techdoc-module-format-and-build.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/techdoc-project-state-and-contributing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechdocProjectStateAndContributingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
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


var TechdocProjectStateAndContributingComponent = /** @class */ (function () {
    function TechdocProjectStateAndContributingComponent() {
        document.title = "Project State &amp; Contributing > techdoc > cloukit";
    }
    TechdocProjectStateAndContributingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n  <h2>Project State &amp; Contributing</h2>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <h4>Goal and State of the Project</h4>\n  <p>We are currently in ALPHA state, meaning we <strong>don't accept contributions or issues</strong> at the moment.</p>\n  <p>Our goal is to write reusable components for everyday life that are stable and well tested.</p>\n  <p>\n    Primary goal is to provide common form components such as toggle, multi-select and more that\n    easily themeable via ngStyle.\n  </p>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* SharedStyles */].styles),
        }),
        __metadata("design:paramtypes", [])
    ], TechdocProjectStateAndContributingComponent);
    return TechdocProjectStateAndContributingComponent;
}());

//# sourceMappingURL=techdoc-project-state-and-contributing.component.js.map

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


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

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






var ComponentFetchService = /** @class */ (function () {
    function ComponentFetchService(http) {
        this.http = http;
        this.commitHash = '393338df91d78c4e67eeb54aeacc789080196797';
        this.baseUrl = 'https://cloukit.github.io/';
        this.sourceCodeBaseUrl = 'https://github.com/cloukit/';
        this.rawFileBaseUrl = 'https://raw.githubusercontent.com/cloukit/';
        this.unpkgBaseUrl = 'https://codeclou.io/codeclou-eu-privacy-proxy/index.php/unpkg.com/@cloukit/';
    }
    ComponentFetchService.prototype.getUnpkgComDistUrl = function (componentId, componentVersion) {
        return "" + this.unpkgBaseUrl + componentId + "@" + componentVersion + "/";
    };
    ComponentFetchService.prototype.getComponent = function (componentId) {
        return this.http
            .get("" + this.baseUrl + componentId + "/component.json?v" + this.commitHash)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.getPackageJson = function (componentId, componentVersion) {
        return this.http
            .get("" + this.unpkgBaseUrl + componentId + "@" + componentVersion + "/package.json?v" + this.commitHash)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.getTheme = function (componentId, componentVersion) {
        return this._fetchSrcFile(componentId, componentVersion, "components/" + componentId + ".theme.ts")
            .map(function (f) { f.sourceCode = f.sourceCode.replace(/[/][*]!(.|[\n\r])*?[*][/]/gm, ''); return f; });
    };
    ComponentFetchService.prototype.getPreviewSourceCode = function (componentId, componentVersion) {
        return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.component.ts');
    };
    ComponentFetchService.prototype.getPreviewTemplate = function (componentId, componentVersion) {
        return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.component.html');
    };
    ComponentFetchService.prototype.getPreviewModule = function (componentId, componentVersion) {
        return this._fetchSrcFile(componentId, componentVersion, 'demo/demo.module.ts')
            .map(function (f) { f.sourceCode = f.sourceCode.replace(/'..[/]index'/, "'@cloukit/" + componentId + "'"); return f; });
    };
    ComponentFetchService.prototype.getThemeMarkdown = function (componentId, componentVersion) {
        return this.http
            .get("" + this.baseUrl + componentId + "/THEME.md?v" + this.commitHash)
            .map(function (data) { return data.text(); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype.getUsageMarkdown = function (componentId, componentVersion) {
        return this.http
            .get("" + this.baseUrl + componentId + "/USAGE.md?v" + this.commitHash)
            .map(function (data) { return data.text(); })
            .catch(this.handleError);
    };
    ComponentFetchService.prototype._fetchSrcFile = function (componentId, componentVersion, demoFileName) {
        var _this = this;
        return this.http
            .get("" + this.rawFileBaseUrl + componentId + "/master/src/" + demoFileName + "?v" + this.commitHash)
            .map(function (data) { return new __WEBPACK_IMPORTED_MODULE_5__model_component_data_model__["b" /* ComponentPreviewFile */](demoFileName, "" + _this.sourceCodeBaseUrl + componentId + "/tree/" + componentVersion + "/src/" + demoFileName, data.text()); })
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
    ComponentFetchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ComponentFetchService);
    return ComponentFetchService;
    var _a;
}());

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