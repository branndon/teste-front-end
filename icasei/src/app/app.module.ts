import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './shared/components/input-search/input-search.component';
import { ListBlockComponent } from './shared/components/list-block/list-block.component';
import { HomeComponent } from './modules/home/home.component';

import { routing } from './app.routes';
import { VideoComponent } from './modules/video/video.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    ListBlockComponent,
    HomeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
