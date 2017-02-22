import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SimpleHttpComponentComponent} from './simple-http-component/simple-http-component.component';
import {
  YouTubeSearchComponent,
  SearchBox, SearchResultComponent
} from './you-tube-search-component/you-tube-search-component.component';

/*
 * Webpack
 */
require('css/styles.css');

/*
 * Injectables
 */
import {youTubeServiceInjectables} from './you-tube-search-component/you-tube-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponentComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {
}
