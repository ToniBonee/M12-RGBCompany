import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPanelComponent } from './compras-panel.component';

describe('ComprasPanelComponent', () => {
  let component: ComprasPanelComponent;
  let fixture: ComponentFixture<ComprasPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasPanelComponent]
    });
    fixture = TestBed.createComponent(ComprasPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
