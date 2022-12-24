import { Component, OnInit, Input} from '@angular/core';
import { GetCastService } from '../../../services/get-cast.service';
import { GetCastDetailService } from '../../../services/get-cast-detail.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.css']
})
export class CastsComponent implements OnInit {

  @Input() type: any;
  @Input() id: any;

  public casts: any = [];

  constructor(
    private getCastList: GetCastService,
    private getDetail: GetCastDetailService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getCast();
  }

  getCast() {
    this.getCastList.getCast(this.type, this.id).subscribe(res => {
      if(res && Array.isArray(res) && res.length != 0){
        this.casts = res;
        document.getElementById("cast-title")!.style.display = "block";
        (document.getElementsByClassName("cast-container")[0] as HTMLElement).style.display = "block";
      }else{
        this.casts = [];
        document.getElementById("cast-title")!.style.display = "none";
        (document.getElementsByClassName("cast-container")[0] as HTMLElement).style.display = "none";
      }
    })
  }

  public popUp(personID: any, content:any) {
    console.log("id is " + personID);
    this.modalService.open(
      content, 
      { 
        scrollable: true, 
        size: 'xl',
       });

    this.getDetail.getCastDetail(personID).subscribe(res => {

      var pic = document.getElementById("pic")!;
      pic.style.backgroundImage = 'url(' + res.profile + ')';


      var name = document.getElementById("actorName")!;
      if (res.name) {
        name.innerHTML = res.name;
      } else {
        name.innerHTML = "";
      }

      var bd = document.getElementById("birth")!;
      if (res.birthday && res.bitrhday != "") {
        bd.innerHTML = "Birthday: " + res.birthday;
      } else {
        bd.innerHTML = "";
      }

      var ht = document.getElementById("hometown")!;
      if (res.hometown && res.hometown != "") {
        ht.innerHTML = "Birth Place: " + res.hometown;
      } else {
        ht.innerHTML = "";
      }

      var sex = document.getElementById("gender")!;
      if (res.gender) {
        sex.innerHTML = "Gender: " + res.gender;
      } else {
        sex.innerHTML = "";
      }

      var hp = document.getElementById("homepage")!;
      if (res.homepage && res.homepage != "") {
        hp.innerHTML = "Website: " + res.homepage;
      } else {
        hp.innerHTML = "";
      }

      var tal = document.getElementById("talent")!;
      if (res.talents && res.talents != "") {
        tal.innerHTML = "Known for: " + res.talents;
      } else {
        tal.innerHTML = "";
      }

      var nn = document.getElementById("nickName")!;
      if (res.otherName && res.otherName != "") {
        nn.innerHTML = "Also Known as: " + res.otherName;
      } else {
        nn.innerHTML = "";
      }

      var imdb = document.getElementById("imdb")!;
      if (res.externalIDs.imdb_id) {
        imdb.setAttribute("href", "https://www.imdb.com/name/" + res.externalIDs.imdb_id);
        imdb.style.display="inline";
      } else {
        imdb.style.display="none";
      }

      var ins = document.getElementById("ins")!;
      if (res.externalIDs.instagram_id) {
        ins.setAttribute("href", "https://www.instagram.com/" + res.externalIDs.instagram_id);
        ins.style.display="inline";
      } else {
        ins.style.display="none";
      }

      var fb = document.getElementById("fb")!;
      if (res.externalIDs.facebook_id) {
        fb.setAttribute("href", "https://www.facebook.com/" + res.externalIDs.facebook_id);
        fb.style.display="inline";
      } else {
        fb.style.display="none";
      }

      var tw = document.getElementById("tw")!;
      if (res.externalIDs.twitter_id) {
        tw.setAttribute("href", "https://www.twitter.com/" + res.externalIDs.twitter_id);
        tw.style.display="inline";
      } else {
        tw.style.display="none";
      }

      var bi = document.getElementById("biography")!;
      if (res.biography != "" && res.biography != null) {
        document.getElementById("bioTitle")!.innerText = "Biography";
        bi.innerText = res.biography;
      } else {
        document.getElementById("bioTitle")!.innerText = "";
        bi.innerHTML = "";
      }

      
    })
    
  }

}
