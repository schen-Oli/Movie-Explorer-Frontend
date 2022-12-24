import { Component, OnInit, Input } from '@angular/core';
import { PosterCard } from 'src/app/interface/poster-card';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  @Input() data: PosterCard[] = [];

  private groupLength: number = 6;
  public mediaData: PosterCard[] = [];
  public mediaDataGroup: PosterCard[][] = [];

  public isScreenWide: Observable<boolean> = of(true);
  
  constructor(
    config: NgbCarouselConfig,
    private breakpoint: BreakpointObserver
  ) {
    config.animation = true;
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true; 
    config.pauseOnFocus = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.isScreenWide = this.breakpoint
      .observe(['(min-width: 768px)']).pipe(map(({ matches }) => matches));  
  }

  ngOnChanges(){
    this.getData();
  }

  getData() {
    console.log(this.data)
      var group: PosterCard[]  = [];
      for (var i = 0; i < this.data.length; i++) {
        if((i % this.groupLength == 0 || i == this.data.length - 1) && group.length != 0){
          this.mediaDataGroup.push(group);
          group = [];
        }
        var media = this.data[i];
        this.mediaData.push(media);
        group.push(media);
      }
  }

}