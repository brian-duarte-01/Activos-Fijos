import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdepartamentoComponent } from './edepartamento.component';

describe('EdepartamentoComponent', () => {
  let component: EdepartamentoComponent;
  let fixture: ComponentFixture<EdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
