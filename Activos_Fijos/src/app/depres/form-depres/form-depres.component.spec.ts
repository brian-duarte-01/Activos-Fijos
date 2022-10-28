import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepresComponent } from './form-depres.component';

describe('FormDepresComponent', () => {
  let component: FormDepresComponent;
  let fixture: ComponentFixture<FormDepresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDepresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDepresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
