import { TestBed } from '@angular/core/testing';

import { GetReconmmendService } from './get-reconmmend.service';

describe('GetReconmmendService', () => {
  let service: GetReconmmendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReconmmendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
