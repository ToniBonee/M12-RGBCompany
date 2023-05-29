import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiaAvatarComponent } from './cambia-avatar.component';

describe('CambiaAvatarComponent', () => {
  let component: CambiaAvatarComponent;
  let fixture: ComponentFixture<CambiaAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiaAvatarComponent]
    });
    fixture = TestBed.createComponent(CambiaAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
