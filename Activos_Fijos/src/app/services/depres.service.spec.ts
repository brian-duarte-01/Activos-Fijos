import { TestBed } from '@angular/core/testing';

import { DepresService } from './depres.service';

describe('DepresService', () => {
  let service: DepresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
