import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcategoriaComponent } from './tcategoria.component';

describe('TcategoriaComponent', () => {
  let component: TcategoriaComponent;
  let fixture: ComponentFixture<TcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
