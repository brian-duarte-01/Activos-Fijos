import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdetalleVentaComponent } from './edetalle-venta.component';

describe('EdetalleVentaComponent', () => {
  let component: EdetalleVentaComponent;
  let fixture: ComponentFixture<EdetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
