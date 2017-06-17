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
  ],
  providers: [
    ComponentFetchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
