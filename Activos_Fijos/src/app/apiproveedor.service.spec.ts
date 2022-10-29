import { TestBed } from '@angular/core/testing';

import { ApiproveedorService } from './apiproveedor.service';

describe('ApiproveedorService', () => {
  let service: ApiproveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiproveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
