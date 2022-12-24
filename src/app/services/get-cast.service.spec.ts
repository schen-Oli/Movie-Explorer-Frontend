import { TestBed } from '@angular/core/testing';

import { GetCastService } from './get-cast.service';

describe('GetCastService', () => {
  let service: GetCastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
