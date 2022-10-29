import { TestBed } from '@angular/core/testing';

import { ApialquilerService } from './apialquiler.service';

describe('ApialquilerService', () => {
  let service: ApialquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApialquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
