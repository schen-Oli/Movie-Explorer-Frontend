import { TestBed } from '@angular/core/testing';

import { GetMediaDataService } from './get-media-data.service';

describe('GetMediaDataService', () => {
  let service: GetMediaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMediaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
