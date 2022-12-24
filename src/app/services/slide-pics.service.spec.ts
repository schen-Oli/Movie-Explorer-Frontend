import { TestBed } from '@angular/core/testing';

import { SlidePicsService } from './slide-pics.service';

describe('SlidePicsService', () => {
  let service: SlidePicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidePicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
