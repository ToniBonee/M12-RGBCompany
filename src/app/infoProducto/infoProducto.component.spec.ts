import { ComponentFixture, TestBed } from '@angular/core/testing';

import { infoProducto } from './infoProducto.component';

describe('infoProducto', () => {
  let component: infoProducto;
  let fixture: ComponentFixture<infoProducto>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [infoProducto]
    });
    fixture = TestBed.createComponent(infoProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
