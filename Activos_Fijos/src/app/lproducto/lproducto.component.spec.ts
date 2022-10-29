import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LproductoComponent } from './lproducto.component';

describe('LproductoComponent', () => {
  let component: LproductoComponent;
  let fixture: ComponentFixture<LproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
