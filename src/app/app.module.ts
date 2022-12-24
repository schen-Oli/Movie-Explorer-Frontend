import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';

import { SlidesComponent } from './components/homepage/slides/slides.component';

import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ReviewComponent } from './components/detailpage/review/review.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { CastsComponent } from './components/detailpage/casts/casts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MylistComponent,
    SlidesComponent,
    ReviewComponent,
    NavbarComponent,
    TilesComponent,
    YoutubeComponent,
    DetailpageComponent,
    CastsComponent,
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
