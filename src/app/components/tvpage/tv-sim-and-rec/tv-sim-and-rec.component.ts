import { Component, OnInit, Input } from '@angular/core';
import { GetReconmmendService } from '../../../services/get-reconmmend.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tv-sim-and-rec',
  templateUrl: './tv-sim-and-rec.component.html',
  styleUrls: ['./tv-sim-and-rec.component.css']
})
export class TvSimAndRecComponent implements OnInit {

  @Input() type: any;
  @Input() id: any;

  private rec1:any = [];
  private rec2:any = [];
  private rec3:any = [];
  private rec4:any = [];
  public recommendations:any = [];

  public isScreenWide: Observable<boolean> = of(true);

  private sim1:any = [];
  private sim2:any = [];
  private sim3:any = [];
  private sim4:any = [];
  public similars:any = [];

  public numOfRec = -1;
  public numOfSim = -1;
  public recs:any = [];
  public sims:any = [];

  constructor(
    private getRecAndSim : GetReconmmendService,
    private config : NgbCarouselConfig,
    private breakpoint: BreakpointObserver
  ) { 
    this.config.interval = 0;
  }

  ngOnInit(): void {
    this.getRec();
    this.getSim();
    this.isScreenWide = this.breakpoint
    .observe(['(min-width: 600px)']).pipe(map(({ matches }) => matches));  
  }

  getRec(){
    this.getRecAndSim.getRec(this.type, this.id).subscribe( res => {
      this.numOfRec = res.length;
      if(this.numOfRec>0){
        document.getElementById("recTitle")!.innerText = "Recommended TVs";
      }
      for(var i = 0; i < this.numOfRec; i++){
        this.recs.push(res[i]);
        if(i < 6){
          this.rec1.push(res[i]);
        }else if(i < 12){
          this.rec2.push(res[i]);
        }else if(i < 18){
          this.rec3.push(res[i]);
        }else{
          this.rec4.push(res[i]);
        }
      }
      if(this.rec1.length > 0){
        this.recommendations.push(this.rec1);
      }
      if(this.rec3.length > 0){
        this.recommendations.push(this.rec2);
      }
      if(this.rec4.length > 0){
        this.recommendations.push(this.rec3);
      }
      if(this.rec4.length > 0){
        this.recommendations.push(this.rec4);
      }
    })
  }

  getSim(){
    this.getRecAndSim.getSim(this.type, this.id).subscribe( res => {
      this.numOfSim = res.length;
      if(this.numOfSim>0){
        document.getElementById("simTitle")!.innerText = "Similar TVs";
      }
      for(var i = 0; i < this.numOfSim; i++){
        this.sims.push(res[i]);
        if(i < 6){
          this.sim1.push(res[i]);
        }else if(i < 12){
          this.sim2.push(res[i]);
        }else if(i < 18){
          this.sim3.push(res[i]);
        }else{
          this.sim4.push(res[i]);
        }
      }
      if(this.sim1.length > 0){
        this.similars.push(this.sim1);
      }
      if(this.sim2.length > 0){
        this.similars.push(this.sim2);
      }
      if(this.sim3.length > 0){
        this.similars.push(this.sim3);
      }
      if(this.sim4.length > 0){
        this.similars.push(this.sim4);
      }
    })
  }

}
