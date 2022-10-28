import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EestadoComponent } from './eestado.component';

describe('EestadoComponent', () => {
  let component: EestadoComponent;
  let fixture: ComponentFixture<EestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
