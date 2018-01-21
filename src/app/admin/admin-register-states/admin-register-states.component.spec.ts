import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterStatesComponent } from './admin-register-states.component';

describe('AdminRegisterStatesComponent', () => {
  let component: AdminRegisterStatesComponent;
  let fixture: ComponentFixture<AdminRegisterStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save', () => {
    expect(component).toBeTruthy();
  });
});
