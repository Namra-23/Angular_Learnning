import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { NgxEditorModule } from 'ngx-editor';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideMarkdown()]
};
@NgModule({
  declarations: [],
  imports: [BrowserModule, NgxEditorModule, MarkdownModule.forRoot()],
})

export class AppModule{}