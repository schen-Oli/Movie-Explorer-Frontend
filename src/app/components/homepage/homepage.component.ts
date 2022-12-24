import { Component, Input, OnInit } from '@angular/core';
import { PosterCard } from 'src/app/interface/poster-card';
import { GetMediaDataService } from '../../services/get-media-data.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public popularMovies: PosterCard[] = [];
  public topRatedMovies: PosterCard[] = [];
  public trendingMovies: PosterCard[] = [];

  public popularTvs: PosterCard[] = [];
  public topRatedTvs: PosterCard[] = [];
  public trendingTvs: PosterCard[] = [];

  public continueWatching: PosterCard[] = [];

  constructor(
    private getMediaData: GetMediaDataService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getMediaData.getMediaData("movie", "popular").subscribe(res => {
      this.popularMovies = res;
    });
    this.getMediaData.getMediaData("movie", "top_rated").subscribe(res => {
      this.topRatedMovies = res;
    });
    this.getMediaData.getMediaData("movie", "trending").subscribe(res => {
      this.trendingMovies = res;
    });
    this.getMediaData.getMediaData("tv", "popular").subscribe(res => {
      this.popularTvs = res;
    });
    this.getMediaData.getMediaData("tv", "top_rated").subscribe(res => {
      this.topRatedTvs = res;
    });
    this.getMediaData.getMediaData("tv", "trending").subscribe(res => {
      this.trendingTvs = res;
    });
    this.continueWatching = this.getContinue();
  }

  getContinue() {
    var continueStore = window.localStorage.getItem("continue");
    if (continueStore) {
      var continueList: PosterCard[] = JSON.parse(continueStore);
      for (var i = 0; i < continueList.length; i++) {
        if (continueList[i].id == undefined) {
          continueList.splice(i, 1);
        }
      }
      return continueList;
    }
    return [];
  }
}