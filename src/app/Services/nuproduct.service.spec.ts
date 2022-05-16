import { TestBed } from '@angular/core/testing';

import { NUProductService } from './nuproduct.service';

describe('NUProductService', () => {
  let service: NUProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NUProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
