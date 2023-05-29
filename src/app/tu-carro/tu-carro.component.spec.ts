import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCarroComponent } from './tu-carro.component';

describe('TuCarroComponent', () => {
  let component: TuCarroComponent;
  let fixture: ComponentFixture<TuCarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuCarroComponent]
    });
    fixture = TestBed.createComponent(TuCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
