import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDepartamentoComponent } from './ldepartamento.component';

describe('LDepartamentoComponent', () => {
  let component: LDepartamentoComponent;
  let fixture: ComponentFixture<LDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
