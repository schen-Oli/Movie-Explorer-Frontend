import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { GetDetailService }from '../../services/get-detail.service';
import { MediaDetail } from '../../interface/media-detail';
import { Carousel } from 'src/app/interface/Carousel';

@Component({
  selector: 'app-tvpage',
  templateUrl: './tvpage.component.html',
  styleUrls: ['./tvpage.component.css']
})
export class TvpageComponent implements OnInit {

  public id:any;
  public details:MediaDetail = {
    "youtubeLink" : "",
    "title": "",
    "genres": "",
    "languages": "",
    "date": "",
    "runtime": "",
    "overview": "",
    "vote": 0,
    "tagline": "",
    "poster": "",
    "id" : 0
  };
  public twitterText1: String = "";
  public twitterText2: String = "";
  public facebookLink: String = "";
  private inList = false;

  constructor(
    private route : ActivatedRoute,
    private getDetails : GetDetailService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchDetails();

  }

  fetchDetails() {
    this.getDetails.getMediaData("tv", this.id).subscribe(res => {
      var details: any = res;
      this.details.title = details.title;
      this.details.genres = details.genres;
      this.details.languages = details.lang;
      this.details.date = details.date;
      this.details.runtime = details.runtime;
      this.details.overview = details.overview;
      this.details.vote = details.vote;
      this.details.tagline = details.tagline;
      this.twitterText1 = "Watch%20" + details.title + "%0A";
      this.details.id = details.id;
      this.details.poster = details.poster;
      this.setStorage();
      this.inWatchList();
    });

    this.getDetails.getYoutube("tv", this.id).subscribe(res => {
      let response:any = res;
      this.details.youtubeLink = response.key;
      this.twitterText2 = "https://www.youtube.com/watch?v=" + response.key + "%0A" +"%23USC%20%23CSCI571%20%23FightOn"; 
      this.facebookLink = "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.youtube.com/watch?v=" + response.key;
    })
  }

  setStorage(){
    if(window.localStorage.getItem("continue")){
      console.log("continue watching exists");
      var curr = JSON.parse(window.localStorage.getItem("continue")!);
      var tmpTitle = this.details.title;
      for(var i = 0; i < curr.length; i++){
        if(curr[i].title == tmpTitle){
          curr.splice(i, 1);
        }
      }
      if(curr.length >= 24){
        curr.pop();
      }
      var info:Carousel = {
        id : this.details.id,
        title : this.details.title,
        poster : this.details.poster,
        type : "tv"
      }

      curr.unshift(info);
      window.localStorage.setItem("continue", JSON.stringify(curr));
      //console.log("Current Continue Watching \n" + window.localStorage.getItem("continue"));
    }else{
      var cw:[] = [];
      window.localStorage.setItem("continue", JSON.stringify(cw));
     // console.log("Adding continue list");
    }
  }


  inWatchList(){
    if(window.localStorage.getItem("watchList")){
      var curr = JSON.parse(window.localStorage.getItem("watchList")!);
      var tmpTitle = this.details.title;
      for(var i = 0; i < curr.length; i++){
        if(curr[i].title == tmpTitle){
          this.inList = true;
          var btn = document.getElementById("watchListBtn")!;
          btn.innerText = "Remove from Watchlist"
          return;
        }
      }
    //  console.log("this is wrong");
      var btn = document.getElementById("watchListBtn")!;
      btn.innerText = "Add to Watchlist"
      this.inList = false;
    }else{
      this.inList = false;
      var wList:[] = [];
      window.localStorage.setItem("watchList", JSON.stringify(wList));
      var btn = document.getElementById("watchListBtn")!;
      btn.innerText = "Add to Watchlist"
    }
  }


  public editWatchList(){
    
      var curr = JSON.parse(window.localStorage.getItem("watchList")!);
      if(this.inList){
        this.hideAlert("added");
        var tmpTitle = this.details.title;
        for(var i = 0; i < curr.length; i++){
          if(curr[i].title == tmpTitle){
            curr.splice(i, 1);
          }
        }
        var btn = document.getElementById("watchListBtn")!;
        btn.innerText = "Add to Watchlist"
        this.inList = false;
        window.localStorage.setItem("watchList", JSON.stringify(curr));
        this.showAlert("removed");
       // console.log("Deleting from watchList \n" + window.localStorage.getItem("watchList"));
      }else{
        var info:Carousel = {
          id : this.details.id,
          title : this.details.title,
          poster : this.details.poster,
          type : "tv"
        }
        curr.unshift(info);
        window.localStorage.setItem("watchList", JSON.stringify(curr));
        var btn = document.getElementById("watchListBtn")!;
        btn.innerText = "Remove from Watchlist";
        this.inList = true;
        this.showAlert("added");
      //  console.log("Added to watchList \n" + window.localStorage.getItem("watchList"));
      }
    }
  
    public showAlert(whichAlert:string) { 
      var thatAlert = document.getElementById(whichAlert);
      thatAlert!.style.display = "block";
      setTimeout(function(){
        thatAlert!.style.display = "none";
      }, 5000);
  }

  public hideAlert(whichAlert2:string) { 
    var thatAlert = document.getElementById(whichAlert2);
    thatAlert!.style.display = "none";
  }

}