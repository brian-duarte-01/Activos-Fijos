import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdepartamentoComponent } from './rdepartamento.component';

describe('RdepartamentoComponent', () => {
  let component: RdepartamentoComponent;
  let fixture: ComponentFixture<RdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
