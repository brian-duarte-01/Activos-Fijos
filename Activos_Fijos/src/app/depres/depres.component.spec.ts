import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepresComponent } from './depres.component';

describe('DepresComponent', () => {
  let component: DepresComponent;
  let fixture: ComponentFixture<DepresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
