import { TestBed } from '@angular/core/testing';

import { ApiestadoService } from './apiestado.service';

describe('ApiestadoService', () => {
  let service: ApiestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
