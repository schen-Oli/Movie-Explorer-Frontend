import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvReviewComponent } from './tv-review.component';

describe('TvReviewComponent', () => {
  let component: TvReviewComponent;
  let fixture: ComponentFixture<TvReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
