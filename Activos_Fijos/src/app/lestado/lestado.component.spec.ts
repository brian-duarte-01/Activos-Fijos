import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LestadoComponent } from './lestado.component';

describe('LestadoComponent', () => {
  let component: LestadoComponent;
  let fixture: ComponentFixture<LestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
