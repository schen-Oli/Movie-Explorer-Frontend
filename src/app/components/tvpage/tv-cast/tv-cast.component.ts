import { Component, OnInit, Input } from '@angular/core';
import { GetCastService } from '../../../services/get-cast.service';
import { GetCastDetailService } from '../../../services/get-cast-detail.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tv-cast',
  templateUrl: './tv-cast.component.html',
  styleUrls: ['./tv-cast.component.css']
})
export class TvCastComponent implements OnInit {

  @Input() type: any;
  @Input() id: any;

  public isScreenWide: Observable<boolean> = of(true);
  public casts:any =[];

  constructor(
    private getCastList:GetCastService,
    private getDetail : GetCastDetailService,
    private breakpoint: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.getCast();
    this.isScreenWide = this.breakpoint
      .observe(['(min-width: 600px)']).pipe(map(({ matches }) => matches));  
  }

  getCast(){
    this.getCastList.getCast(this.type, this.id).subscribe(res => {
      this.casts = res;
    })
  }

  public popUp(personID:any){
  
    
    this.getDetail.getCastDetail(personID).subscribe(res => {
      
      var pic = document.getElementById("pic")!;
      pic.style.backgroundImage = 'url(' + res.profile + ')';
      

      var name = document.getElementById("actorName")!;
      if(res.name){
        name.innerHTML = res.name;
      }else{
        name.innerHTML ="";
      }

      var bd = document.getElementById("birth")!;
      if(res.birthday && res.bitrhday!=""){
        bd.innerHTML = "Birthday: " + res.birthday;
      }else{
        bd.innerHTML ="";
      }

      var ht = document.getElementById("hometown")!;
      if(res.hometown && res.hometown != ""){
        ht.innerHTML = "Birth Place: " + res.hometown;
      }else{
        ht.innerHTML = "";
      }

      var sex = document.getElementById("gender")!;
      if(res.gender){
        sex.innerHTML = "Gender: " + res.gender;
      }else{
        sex.innerHTML="";
      }

      var hp = document.getElementById("homepage")!;
      if(res.homepage && res.homepage !=""){
        hp.innerHTML = "Website: " + res.homepage;
      }else{
        hp.innerHTML = "";
      }

      var tal = document.getElementById("talent")!;
      if(res.talents && res.talents!=""){
        tal.innerHTML = "Known for: " + res.talents;
      }else{
        tal.innerHTML = "";
      }

      var nn = document.getElementById("nickName")!;
      if(res.otherName && res.otherName != ""){
        nn.innerHTML = "Also Known as: " + res.otherName;
      }else{
        nn.innerHTML = "";
      }

      var imdb = document.getElementById("imdb")!;
      if(res.externalIDs.imdb_id){
        imdb.setAttribute("href", "https://www.imdb.com/name/"+res.externalIDs.imdb_id);
        imdb.innerHTML = "<i class=\"fab fa-imdb\" ></i>";
      }else{
        imdb.innerHTML ="";
      }

      var ins = document.getElementById("ins")!;
      if(res.externalIDs.instagram_id){
        ins.setAttribute("href", "https://www.instagram.com/"+res.externalIDs.instagram_id);
        ins.innerHTML = "<i class=\"fab fa-instagram\"></i>";
      }else{
        ins.innerHTML ="";
      }

      var fb = document.getElementById("fb")!;
      if(res.externalIDs.facebook_id){
        fb.setAttribute("href", "https://www.facebook.com/"+res.externalIDs.facebook_id);
        fb.innerHTML = "<i class=\"fab fa-facebook-square\"></i>";
        console.log("facebook.com/"+res.externalIDs.facebook_id);
      }else{
        fb.innerHTML = "";
      }

      var tw = document.getElementById("tw")!;
      if(res.externalIDs.twitter_id){
        tw.setAttribute("href", "https://www.twitter.com/"+res.externalIDs.twitter_id);
        console.log("twitter.com/"+res.externalIDs.twitter_id);
        tw.innerHTML = "<i class=\"fab fa-twitter\"></i>";
      }else{
        tw.innerHTML = "";
      }

      var bi = document.getElementById("biography")!;
      if(res.biography != "" && res.biography!= null){
        document.getElementById("bioTitle")!.innerText = "Biography";
        bi.innerText = res.biography;
      }else{
        document.getElementById("bioTitle")!.innerText = "";
        bi.innerHTML = "";
      }
    })
  }
}
