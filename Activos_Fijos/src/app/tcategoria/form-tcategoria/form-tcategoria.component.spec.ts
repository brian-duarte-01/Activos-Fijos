import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTcategoriaComponent } from './form-tcategoria.component';

describe('FormTcategoriaComponent', () => {
  let component: FormTcategoriaComponent;
  let fixture: ComponentFixture<FormTcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
