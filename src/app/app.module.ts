/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './components/component-documentation.component';
import { ComponentDocumentationPageComponent } from './pages/component-documentation-page.component';
import { NotFoundPageComponent } from './pages/not-found-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { ComponentFetchService } from './services/component-fetch.service';
import { SafeHtmlPipe } from "app/pipes/save-html.pipe";
import { SourceCodeBoxComponent } from './components/source-code-box';
import { PreviewFileBoxComponent } from './components/preview-file-code-box';
import { LinkComponent } from './components/link.component';
import { MarkdownBoxComponent } from './components/markdown-box';

const appRoutes: Routes = [
  { path: 'component/:componentId', component: ComponentDocumentationPageComponent },
  { path: 'component/:componentId/:componentVersion', component: ComponentDocumentationPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    HttpModule,
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    ComponentDocumentationPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    SafeHtmlPipe,
    SourceCodeBoxComponent,
    PreviewFileBoxComponent,
    LinkComponent,
    MarkdownBoxComponent,
  ],
  providers: [
    ComponentFetchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
