import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdetalleVentaComponent } from './rdetalle-venta.component';

describe('RdetalleVentaComponent', () => {
  let component: RdetalleVentaComponent;
  let fixture: ComponentFixture<RdetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
