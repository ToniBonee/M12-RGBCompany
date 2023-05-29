import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatupcComponent } from './creatupc.component';

describe('CreatupcComponent', () => {
  let component: CreatupcComponent;
  let fixture: ComponentFixture<CreatupcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatupcComponent]
    });
    fixture = TestBed.createComponent(CreatupcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
