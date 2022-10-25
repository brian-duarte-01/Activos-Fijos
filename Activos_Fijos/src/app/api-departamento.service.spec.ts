import { TestBed } from '@angular/core/testing';

import { ApiDepartamentoService } from './api-departamento.service';

describe('ApiDepartamentoService', () => {
  let service: ApiDepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
