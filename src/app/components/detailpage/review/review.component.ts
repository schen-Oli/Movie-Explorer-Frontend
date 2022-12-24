import { Component, OnInit, Input } from '@angular/core';
import { GetReviewService } from '../../../services/get-review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

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
      if(res && Array.isArray(res) && res.length != 0){
        this.reviews = res;
        this.numOfReviews = res.length;
        (document.getElementsByClassName("review-container")[0] as HTMLElement).style.display = "block";
      }else{
        (document.getElementsByClassName("review-container")[0] as HTMLElement).style.display = "none";
      }
    })
  }
}
