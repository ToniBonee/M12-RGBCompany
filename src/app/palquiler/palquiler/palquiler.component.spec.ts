import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalquilerComponent } from './palquiler.component';

describe('PalquilerComponent', () => {
  let component: PalquilerComponent;
  let fixture: ComponentFixture<PalquilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalquilerComponent]
    });
    fixture = TestBed.createComponent(PalquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
