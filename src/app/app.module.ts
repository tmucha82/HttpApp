import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SimpleHttpComponentComponent} from './simple-http-component/simple-http-component.component';
import {YouTubeSearchComponentComponent} from './you-tube-search-component/you-tube-search-component.component';

/*
 * Injectables
 */
import {youTubeServiceInjectable} from './you-tube-search-component/you-tube-search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponentComponent,
    YouTubeSearchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectable],
  bootstrap: [AppComponent]
})
export class AppModule {
}
