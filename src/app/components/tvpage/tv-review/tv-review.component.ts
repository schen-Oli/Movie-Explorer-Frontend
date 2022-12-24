import { Component, OnInit, Input } from '@angular/core';
import { GetReviewService } from '../../../services/get-review.service';

@Component({
  selector: 'app-tv-review',
  templateUrl: './tv-review.component.html',
  styleUrls: ['./tv-review.component.css']
})
export class TvReviewComponent implements OnInit {

  @Input() type: any;
  @Input() id: any;

  public numOfReviews:number = 0;
  public reviews:any;

  constructor(
    private reviewData : GetReviewService
  ) { }

  ngOnInit(): void {
    this.getReview();
  }

  getReview(){
    this.reviewData.getReview(this.type, this.id).subscribe(res => {
      this.reviews = res;
      this.numOfReviews = res.length;
    })
  }

}
