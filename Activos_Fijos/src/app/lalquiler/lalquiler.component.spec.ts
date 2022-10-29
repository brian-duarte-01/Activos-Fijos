import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LalquilerComponent } from './lalquiler.component';

describe('LalquilerComponent', () => {
  let component: LalquilerComponent;
  let fixture: ComponentFixture<LalquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LalquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LalquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
