import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LproveedorComponent } from './lproveedor.component';

describe('LproveedorComponent', () => {
  let component: LproveedorComponent;
  let fixture: ComponentFixture<LproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LproveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
