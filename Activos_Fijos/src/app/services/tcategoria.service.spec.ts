import { TestBed } from '@angular/core/testing';

import { TcategoriaService } from './tcategoria.service';

describe('TcategoriaService', () => {
  let service: TcategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
