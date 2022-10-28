import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdetalleVentaComponent } from './ldetalle-venta.component';

describe('LdetalleVentaComponent', () => {
  let component: LdetalleVentaComponent;
  let fixture: ComponentFixture<LdetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
