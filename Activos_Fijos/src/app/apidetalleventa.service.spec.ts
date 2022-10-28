import { TestBed } from '@angular/core/testing';

import { ApidetalleventaService } from './apidetalleventa.service';

describe('ApidetalleventaService', () => {
  let service: ApidetalleventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidetalleventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
