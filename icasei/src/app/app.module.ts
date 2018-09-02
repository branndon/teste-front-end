import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './shared/components/input-search/input-search.component';
import { ListBlockComponent } from './shared/components/list-block/list-block.component';
import { HomeComponent } from './modules/home/home.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    ListBlockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
