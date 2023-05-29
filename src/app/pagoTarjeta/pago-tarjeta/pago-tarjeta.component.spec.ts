import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTarjetaComponent } from './pago-tarjeta.component';

describe('PagoTarjetaComponent', () => {
  let component: PagoTarjetaComponent;
  let fixture: ComponentFixture<PagoTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoTarjetaComponent]
    });
    fixture = TestBed.createComponent(PagoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
