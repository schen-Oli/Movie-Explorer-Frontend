import { Component, OnInit } from '@angular/core';
import { SlidePicsService } from '../../../services/slide-pics.service';
import { CurrentPlay } from '../../../interface/current-play'

import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
  // providers: [NgbCarouselConfig]
})

export class SlidesComponent implements OnInit {

  public slides: CurrentPlay[] = [];
  public isScreenWide: Observable<boolean> = of(true);

  constructor(
    private getMoiveSlides: SlidePicsService,
    // private breakpoint: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.fetchData();
    // this.isScreenWide = this.breakpoint
    //   .observe(['(min-width: 600px)']).pipe(map(({ matches }) => matches));
  }

  fetchData() {
    this.getMoiveSlides.getAllSlides().subscribe(res => {
      let response: CurrentPlay[] = res;
      for (var i = 0; i < 5; i++) {
        var slide = response[i];
        this.slides.push(slide);
      }
    });
  }

}
