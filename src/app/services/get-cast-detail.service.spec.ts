import { TestBed } from '@angular/core/testing';

import { GetCastDetailService } from './get-cast-detail.service';

describe('GetCastDetailService', () => {
  let service: GetCastDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCastDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
