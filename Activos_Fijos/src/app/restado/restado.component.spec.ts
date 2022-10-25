import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestadoComponent } from './restado.component';

describe('RestadoComponent', () => {
  let component: RestadoComponent;
  let fixture: ComponentFixture<RestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
